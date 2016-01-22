#!/bin/sh

set -e

#Cannot be changed as paths are compiled into the binaries
PREFIX=/usr/local

SILENT=no

if [ "x$1" = "xsilent" ]
then
	SILENT=yes
fi

USER=`whoami`

if [ "x$USER" != "xroot" ]
then
	echo "Sorry, you must be super user to install UrBackup Client. Try again with sudo?"
	exit 6
fi

if [ $SILENT = no ]
then
	echo "Installation of UrBackup Client $version_short$... Proceed ? [Y/n]"
	read yn
	if [ "x$yn" = xn ]
	then
		exit 5
	fi
else
	echo "Installation of UrBackup Client $version_short$..."
fi

echo "Uncompressing install data..."
tar xzf install-data.tar.gz

DEBIAN=no

if [ -e /etc/debian_version ]
then
	DEBIAN=yes
	echo "Detected Debian (derivative) system"
	mv urbackupclientbackend-debian.service urbackupclientbackend.service
	mv init.d_client init.d
else
	echo "Assuming RedHat (derivative) system"
	mv urbackupclientbackend-redhat.service urbackupclientbackend.service
	mv init.d_client_rh init.d
fi

SYSTEMD=no

if command -v systemctl >/dev/null 2>&1
then
	echo "Detected systemd"
	SYSTEMD=yes
	
	if systemctl status urbackupclientbackend.service >/dev/null 2>&1
	then
		echo "Stopping currently running client service..."
		systemctl stop urbackupclientbackend.service || true
	fi
else
	if [ -e /etc/init.d/urbackupclientbackend ]
	then
		if /etc/init.d/urbackupclientbackend status >/dev/null 2>&1
		then
			echo "Stopping currently running client service..."
			/etc/init.d/urbackupclientbackend stop || true
		fi
	fi
fi

TARGET=no

arch=`uname -m`
case "$arch" in
    i?86) TARGET=i386-linux-eng ;;
    x86_64) TARGET=x86_64-linux-eng ;;
    armv6*) TARGET=armv6-linux-engeabihf ;;
	armv7*) TARGET=armv6-linux-engeabihf ;;
	armv8*) TARGET=armv6-linux-engeabihf ;;
esac

if [ $TARGET = armv6-linux-engeabihf ]
then
	$TARGET/urbackupclientctl --version > /dev/null 2>&1 || RET=$?
	if [ $?RET != 1 ]
	then
		echo "Using floating point emulation on ARMv6 (soft float)"
		TARGET=armv6-linux-engeabi
	fi
fi

if [ $TARGET = no ]
then
	echo "Cannot run UrBackup client on this server. CPU architecture $arch not supported. Stopping installation."
	exit 3
else
	echo "Detected architecture $TARGET"
fi

$TARGET/urbackupclientctl --version > /dev/null 2>&1 || RET=$?
if [ $RET != 1 ]
then
	echo "Error running executable on this system ($arch). Stopping installation."
	exit 2
fi

install -c -m 744 -d "$PREFIX/var/urbackup/data"
install -c -m 744 -d "$PREFIX/sbin"
install -c -m 744 -d "$PREFIX/bin"
install -c -m 744 -d "$PREFIX/share/urbackup/scripts"
install -c -m 744 -d "$PREFIX/etc/urbackup"

install -c "$TARGET/urbackupclientbackend" "$PREFIX/sbin"
install -c "$TARGET/urbackupclientctl" "$PREFIX/bin"

sed "s|SYSCONFDIR|$PREFIX/etc/urbackup|g" "backup_scripts/list" > "backup_scripts/list.r"
mv "backup_scripts/list.r" "backup_scripts/list"
install -c "backup_scripts/list" "$PREFIX/share/urbackup/scripts"
install -c "backup_scripts/mariadb" "$PREFIX/share/urbackup/scripts"

test -e "$PREFIX/etc/urbackup/mariadb.conf" || install -c "backup_scripts/mariadb.conf" "$PREFIX/etc/urbackup"

chmod 700 "$PREFIX/share/urbackup/scripts"*
chmod 700 "$PREFIX/etc/urbackup/"*

/usr/bin/install -c -m 644 "version.txt" "$PREFIX/var/urbackup"

cat << c71b9d17069d4d03bd7f6b75f36ba5ff > "$PREFIX/var/urbackup/initial_settings.cfg"
#Initial Settings. Changes will not be respected.
#48692563-17e4-4ccb-a078-f14372fdbe20
################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################
#6e7f6ba0-8478-4946-b70a-f1c7e83d28cc
c71b9d17069d4d03bd7f6b75f36ba5ff

if test ! -e "$PREFIX/var/urbackup/server_idents.txt"
then
	cat << c71b9d17069d4d03bd7f6b75f36ba5ff > "$PREFIX/var/urbackup/server_idents.txt"
#17460620-769b-4add-85aa-a764efe84ab7
###################################################
#569d42d2-1b40-4745-a426-e86a577c7f1a
c71b9d17069d4d03bd7f6b75f36ba5ff
fi

CONFIG_FILE=no
if [ $DEBIAN = yes ]
then
	if [ -e /etc/default ] && [ ! -e /etc/default/urbackupclient ]
	then
		CONFIG_FILE=/etc/default/urbackupclient
		install -c defaults_client /etc/default/urbackupclient
	fi
else
	if [ -e /etc/sysconfig ] && [ ! -e /etc/sysconfig/urbackupclient ]
	then
		CONFIG_FILE=/etc/sysconfig/urbackupclient
		install -c defaults_client /etc/sysconfig/urbackupclient
	fi
fi

if [ $CONFIG_FILE != no ]
then
	if grep "internet_mode_enabled=true" "$PREFIX/var/urbackup/initial_settings.cfg" > /dev/null 2>&1
	then
		echo "Enabling internet only mode"
		sed 's/INTERNET_ONLY=false/INTERNET_ONLY=true/g' "$CONFIG_FILE.new"
		mv "$CONFIG_FILE.new" "$CONFIG_FILE"
	fi
fi

if [ $SYSTEMD = yes ]
then
	echo "Installing systemd unit..."
	SYSTEMD_DIR=`pkg-config systemd --variable=systemdsystemunitdir`
	
	if [ "x$SYSTEMD_DIR" = x ]
	then
		echo "Cannot find systemd unit dir. Assuming /lib/systemd/system"
		SYSTEMD_DIR="/lib/systemd/system"
	fi
	
	install -c urbackupclientbackend.service $SYSTEMD_DIR
	systemctl enable urbackupclientbackend.service
	
	echo "Starting UrBackup Client service..."
	systemctl start urbackupclientbackend.service
	
	if systemctl status urbackupclientbackend.service >/dev/null 2>&1
	then
		echo "Successfully started client service. Installation complete."
	else
		echo "Starting client service failed. Please investigate."
		exit 1
	fi
else
	echo "Installing System V init script..."
	
	install -c init.d /etc/init.d/urbackupclientbackend
	
	if [ $DEBIAN = yes ]
	then
		update-rc.d urbackupclientbackend defaults
	else
		chkconfig --add urbackupclientbackend
		chkconfig --level 345 urbackupclientbackend on
	fi
	
	echo "Starting UrBackup Client service..."
	/etc/init.d/urbackupclientbackend start
	
	if /etc/init.d/urbackupclientbackend status >/dev/null 2>&1
	then
		echo "Successfully started client service. Installation complete."
	else
		echo "Starting client service failed. Please investigate."
		exit 1
	fi
fi

if [ $SILENT = no ]
then
	if [ -e $PREFIX/etc/urbackup/create_filesystem_snapshot ] || [ -e $PREFIX/etc/urbackup/no_filesystem_snapshot ]
	then
		exit 0
	fi

    CENTOS=no

    DATTO=no
    LVM=no
    BTRFS=no

    if [ $DEBIAN = no ]
    then
        if grep "release 6" /etc/redhat-release > /dev/null 2>&1
        then
            CENTOS=6
        fi

        if grep "release 7" /etc/redhat-release > /dev/null 2>&1
        then
            CENTOS=7
        fi
    fi


    if [ $CENTOS != no ]
    then
        echo "+Detected EL/RH $CENTOS. Dattobd supported"
        DATTO=yes
    fi

    if [ $DATTO = no ]
    then
        echo "-dattobd not supported on this system"
    fi

    if df -T -P | tr -s " " | cut -d" " -f2 | grep "btrfs" > /dev/null 2>&1
    then
        echo "+Detected btrfs filesystem"
        BTRFS=yes
    else
		echo "-Detected no btrfs filesystem"
	fi

	if command -v lvs >/dev/null 2>&1
	then
		LVM_VOLS=`lvs | wc -l`
		if [ "x$LVM_VOLS" != x ] && [ $LVM_VOLS > 1 ]
		then
			echo "+Detected LVM volumes"
			LVM=yes
		else
			echo "-Detected no LVM volumes"
		fi
	else
		echo "-LVM not installed"
	fi
	

    while true
    do
        echo "Please select the snapshot mechanism to be used for backups:"
        if [ $DATTO != no ]
        then
            echo "1) dattobd volume snapshot kernel module from https://github.com/datto/dattobd"
        fi

        if [ $LVM != no ]
        then
            echo "2) LVM - Logical Volume Manager snapshots"
        fi

        if [ $BTRFS != no ]
        then
            echo "3) btrfs filesystem snapshots"
        fi

        echo "4) Use no snapshot mechanism"

        read snapn

        if [ "x$snapn" = x1 ]
        then
            break
        fi

        if [ "x$snapn" = x2 ]
        then
            break
        fi

        if [ "x$snapn" = x3 ]
        then
            break
        fi

        if [ "x$snapn" = x4 ]
        then
            break
        fi
    done

    mkdir -p $PREFIX/etc/urbackup

    if [ $snapn = 3 ]
    then
        cp btrfs_create_filesystem_snapshot $PREFIX/etc/urbackup/create_filesystem_snapshot
        cp btrfs_remove_filesystem_snapshot $PREFIX/etc/urbackup/remove_filesystem_snapshot
        echo "Installed snapshot scripts into $PREFIX/etc/urbackup"
    fi

    if [ $snapn = 2 ]
    then
        cp lvm_create_filesystem_snapshot $PREFIX/etc/urbackup/create_filesystem_snapshot
        cp lvm_remove_filesystem_snapshot $PREFIX/etc/urbackup/remove_filesystem_snapshot
        echo "Installed snapshot scripts into $PREFIX/etc/urbackup"
    fi

    if [ $snapn = 1 ]
    then
        if [ $CENTOS != no ]
        then
            curl -O https://cpkg.datto.com/datto-rpm/EnterpriseLinux/7/x86_64/datto-el-rpm-release-1.0.0-1.noarch.rpm
            yum localinstall datto-el-rpm-release-1.0.0-1.noarch.rpm
            yum install dkms-dattobd dattobd-utils
        fi

        cp dattobd_create_filesystem_snapshot $PREFIX/etc/urbackup/create_filesystem_snapshot
        cp dattobd_remove_filesystem_snapshot $PREFIX/etc/urbackup/remove_filesystem_snapshot
        echo "Installed snapshot scripts into $PREFIX/etc/urbackup"
    fi
	
	if [ $snapn = 4 ]
	then
		touch $PREFIX/etc/urbackup/no_filesystem_snapshot
	fi
fi