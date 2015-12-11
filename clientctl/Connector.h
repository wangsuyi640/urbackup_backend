/*************************************************************************
*    UrBackup - Client/Server backup system
*    Copyright (C) 2011  Martin Raiber
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU General Public License as published by
*    the Free Software Foundation, either version 3 of the License, or
*    (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU General Public License for more details.
*
*    You should have received a copy of the GNU General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
**************************************************************************/

#ifndef CONNECTOR_H
#define CONNECTOR_H

#include <string>
#include <vector>

struct SBackupDir
{
	std::string path;
	int id;
};

struct SStatus
{
	std::string lastbackupdate;
	std::string status;
	std::string pcdone;
	bool pause;
};

struct SLogEntry
{
	int logid;
	std::string logtime;
};

struct SLogLine
{
	int loglevel;
	std::string msg;
};

class Connector
{
public:
	static std::vector<SBackupDir> getSharedPaths(void);
	static bool saveSharedPaths(const std::vector<SBackupDir> &res);
	static SStatus getStatus(void);
	static unsigned int getIncrUpdateIntervall(void);
	static int startBackup(bool full);
	static int startImage(bool full);
	static bool updateSettings(const std::string &sdata);
	static std::vector<SLogEntry> getLogEntries(void);
	static std::vector<SLogLine> getLogdata(int logid, int loglevel);
	static bool setPause(bool b_pause);
	static std::string getStatusDetail();

	static std::string getFileBackupsList();
	static std::string getFileList(const std::string& path, int* backupid);

	static void setPWFile(const std::string &pPWFile);
	static void setPWFileChange(const std::string &pPWFile);
	static void setClient(const std::string &pClient);

	static bool hasError(void);
	static bool isBusy(void);

private:

	static bool readTokens();

	static std::string getResponse(const std::string &cmd, const std::string &args, bool change_command);
	static std::string pw;
	static std::string pwfile;
	static std::string pwfile_change;
	static std::string client;
	static bool error;
	static bool busy;
	static std::string tokens;
};

#endif //CONNECTOR_H