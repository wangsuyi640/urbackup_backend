if(!window.tmpls) tmpls=new Object();
tmpls.progress_row=new Template("<tr>\r\n\t<td class=\"tabFLeft\">#{name}</td>\r\n\t<td class=\"tabFLeft\">#{action}</td>\r\n\t<td class=\"tabFLeft\" style=\"text-align: center;\">\r\n\t\t<div style=\"width: 100%; border: 1px solid black;\">\r\n\t\t\t<div style=\"width: #{pcdone}%;background-image: url(progress.png); background-repeat:repeat-x;height:15px\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t#{pcdone}%\r\n\t<td class=\"tabFRight\">#{queue}</td>\r\n</tr>");
tmpls.progress_table=new Template("﻿<h1>#{tActivities}</h1>\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\t\t\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tComputer name}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tAction}</th>\r\n\t<th style=\"width: 350px\" class=\"tabHeader\">#{tProgress}</th>\r\n\t<th style=\"width: 250px\" class=\"tabHeaderRight\">#{tFiles in queue}</th>\r\n</tr>\r\n#{rows}\r\n</table>");
tmpls.progress_table_none=new Template("﻿<h1>#{tActivities}</h1>\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\t\t\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tComputer name}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tAction}</th>\r\n\t<th style=\"width: 350px\" class=\"tabHeader\">#{tProgress}</th>\r\n\t<th style=\"width: 250px\" class=\"tabHeaderRight\">#{tFiles in queue}</th>\r\n</tr>\r\n<tr>\r\n\t<td colspan=\"4\" class=\"tabFRight\">#{tNo activities}</td>\r\n</tr>\r\n</table>");
tmpls.main_nav=new Template("<a class=\"links_item\" href=\"javascript: #{func}('#{params}')\">#{name}</a>");
tmpls.main_nav_sel=new Template("<a class=\"links1_active\" href=\"javascript: #{func}('#{params}')\">#{name}</a>");
tmpls.lastacts_table=new Template("﻿<h1>#{tLast activities}</h1>\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\t\t\r\n\t<th style=\"width: 50px\" class=\"tabHeader\">#{tID}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tComputer name}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tAction}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tStarting time}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tRequired time}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeaderRight\">#{tUsed Storage}</th>\r\n</tr>\r\n#{rows}\r\n</table>");
tmpls.lastacts_row=new Template("<tr>\r\n\t<td class=\"tabFLeft\">#{id}</td>\r\n\t<td class=\"tabFLeft\">#{name}</td>\r\n\t<td class=\"tabFLeft\">#{action}</td>\r\n\t<td class=\"tabFLeft\">#{backuptime}</td>\r\n\t<td class=\"tabFLeft\">#{duration}</td>\r\n\t<td class=\"tabFRight\">#{size}</td>\r\n</tr>");
tmpls.stat_general=new Template("﻿<h1>#{tStorage allocation}</h1>\r\n\r\n<div id=\"piegraph\"><img src=\"indicator.gif\" />#{tLoading}...<br /><br /></div>\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\t\t\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tComputer name}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tImages}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tFiles}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeaderRight\">#{tAll}</th>\r\n</tr>\r\n#{rows}\r\n<tr>\r\n\t<td class=\"tabFRight\" colspan=\"4\" style=\"height:0px\"></td>\r\n</tr>\r\n<tr>\r\n\t<td class=\"tabFLeft\">#{tAll}</td>\r\n\t<td class=\"tabFLeft\">#{images_total}</td>\r\n\t<td class=\"tabFLeft\">#{files_total}</td>\r\n\t<td class=\"tabFRight\">#{used_total}</td>\r\n</tr>\r\n</table>\r\n\r\n<h1>#{tStorage usage}</h1>\r\n\r\n<div id=\"usagegraph\"><img src=\"indicator.gif\" />#{tLoading}...</div>");
tmpls.stat_general_row=new Template("<tr>\r\n\t<td class=\"tabFLeft\">#{name}</td>\r\n\t<td class=\"tabFLeft\">#{images}</td>\r\n\t<td class=\"tabFLeft\">#{files}</td>\r\n\t<td class=\"tabFRight\">#{used}</td>\r\n</tr>");
tmpls.stat_user=new Template("<h1>#{tStorage usage of} #{clientname}</h1>\r\n\r\n<div id=\"usagegraph\"><img src=\"indicator.gif\" />#{tLoading}...</div>");
tmpls.status=new Template("<h1>#{tBackup status}</h1>\r\n\r\n#{dir_error}\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\t\t\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tComputer name}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tLast seen}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tLast file backup}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tLast image backup}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tFile backup status}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeaderRight\">#{tImage backup status}</th>\r\n</tr>\r\n#{rows}\r\n</table>\r\n<br><br>\r\n#{dtl_c1}<a href=\"javascript: show_status1(true);\">#{tShow details}</a>#{dtl_c2}");
tmpls.status_row=new Template("<tr>\r\n\t<td class=\"tabFLeft\">#{name}</td>\r\n\t<td class=\"tabFLeft\">#{lastseen}</td>\r\n\t<td class=\"tabFLeft\">#{lastbackup}</td>\r\n\t<td class=\"tabFLeft\">#{lastbackup_image}</td>\r\n\t<td class=\"tabFLeft\" style=\"#{file_style}\"><div style=\"background-color:white\">#{file_ok_t}</div></td>\r\n\t<td class=\"tabFRight\" style=\"#{image_style}\"><div style=\"background-color:white\">#{image_ok_t}</div></td>\r\n</tr>");
tmpls.backups_clients=new Template("<strong>#{tClients}</strong><br /><br />\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\r\n\t<th style=\"width: 25px\" class=\"tabHeader\"></th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tComputer name}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeaderRight\">#{tLast file backup}</th>\r\n</tr>\r\n#{rows}\r\n</table>");
tmpls.backups_clients_row=new Template("<tr onmouseover=\"tabMouseOver(this)\" onmouseout=\"tabMouseOut(this)\" onclick=\"tabMouseClickClients(#{id})\">\r\n\t<td class=\"tabFLeftH\"></td>\r\n\t<td class=\"tabFLeftH\">#{name}</td>\r\n\t<td class=\"tabFRightH\">#{lastbackup}</td>\r\n</tr>");
tmpls.backups_backups=new Template("﻿<a href=\"javascript: show_backups1()\">#{tClients}</a> > <strong>#{clientname}</strong><br /><br />\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\r\n\t<th style=\"width: 25px\" class=\"tabHeader\"></th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tBackup time}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tIncremental}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeaderRight\">#{tSize}</th>\r\n</tr>\r\n#{rows}\r\n</table>");
tmpls.backups_backups_row=new Template("<tr onmouseover=\"tabMouseOver(this)\" onmouseout=\"tabMouseOut(this)\" onclick=\"tabMouseClickBackups(#{clientid}, #{id})\">\r\n\t<td class=\"tabFLeftH\"></td>\r\n\t<td class=\"tabFLeftH\">#{backuptime}</td>\r\n\t<td class=\"tabFLeftH\">#{incr}</td>\r\n\t<td class=\"tabFRightH\">#{size_bytes}</td>\r\n</tr>");
tmpls.backups_files=new Template("﻿<a href=\"javascript: show_backups1()\">#{tClients}</a> > <a href=\"javascript: tabMouseClickClients(#{clientid})\">#{clientname}</a> > #{cpath}<br /><br />\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\r\n\t<th style=\"width: 25px\" class=\"tabHeader\"></th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tFile}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeaderRight\">#{tSize}</th>\r\n</tr>\r\n#{rows}\r\n</table>");
tmpls.backups_files_row=new Template("<tr onmouseover=\"tabMouseOver(this)\" onmouseout=\"tabMouseOut(this)\" onclick=\"tabMouseClick#{proc}(#{clientid},#{backupid},'#{path}')\">\r\n\t<td class=\"tabFLeftH\"></td>\r\n\t<td class=\"tabFLeftH\">#{name}</td>\r\n\t<td class=\"tabFRightH\">#{size}</td>\r\n</tr>");
tmpls.settings_save_ok=new Template("<br />\r\n<br />\r\n<strong>#{tSaved settings successfully}.</strong>");
tmpls.settings_general=new Template("﻿<br />\r\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"formtable\">\r\n<tr>\r\n<td>#{tBackup storage path}:</td>\r\n<td><input type=\"text\" size=\"40\" id=\"backupfolder\" value=\"#{backupfolder}\"/> </td>\r\n</tr>\r\n<tr>\r\n<td>#{tDo not do image backups}:</td>\r\n<td><input type=\"checkbox\" id=\"no_images\" value=\"true\" #{no_images}/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tAutomatically shut down server}:</td>\r\n<td><input type=\"checkbox\" id=\"autoshutdown\" value=\"true\" #{autoshutdown}/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tAutoupdate clients}:</td>\r\n<td><input type=\"checkbox\" id=\"autoupdate_clients\" value=\"true\" #{autoupdate_clients}/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tMax number of simultaneous backups}:</td>\r\n<td><input type=\"text\" id=\"max_sim_backups\" value=\"#{max_sim_backups}\" /></td>\r\n</tr>\r\n<tr>\r\n<td>#{tMax number of recently active clients}:</td>\r\n<td><input type=\"text\" id=\"max_active_clients\" value=\"#{max_active_clients}\" /></td>\r\n</tr>\r\n#{ONLY_WIN32_BEGIN}\r\n<tr>\r\n<td>#{tNondefault temporary file directory}:</td>\r\n<td><input type=\"text\" id=\"tmpdir\" value=\"#{tmpdir}\" /></td>\r\n</tr>\r\n#{ONLY_WIN32_END}\r\n#{settings_inv}\r\n</table>\r\n<br />\r\n<br />\r\n<input type=\"button\" value=\"#{tSave}\" onClick=\"saveGeneralSettings()\" />");
tmpls.settings_inv_row=new Template("﻿<tr>\r\n<td>#{tInterval for incremental file backups}</td>\r\n<td><input type=\"text\" id=\"update_freq_incr\" value=\"#{update_freq_incr}\"/> #{thours}</td>\r\n</tr>\r\n<tr>\r\n<td>#{tInterval for full file backups}</td>\r\n<td><input type=\"text\" id=\"update_freq_full\" value=\"#{update_freq_full}\"/> #{tdays}</td>\r\n</tr>\r\n<tr>\r\n<td>#{tInverval for incremental image backups}</td>\r\n<td><input type=\"text\" id=\"update_freq_image_incr\" value=\"#{update_freq_image_incr}\"/> #{tdays}</td>\r\n</tr>\r\n<tr>\r\n<td>#{tInterval for full image backups}</td>\r\n<td><input type=\"text\" id=\"update_freq_image_full\" value=\"#{update_freq_image_full}\"/> #{tdays}</td>\r\n</tr>\r\n<tr>\r\n<td>#{tMaximal number of incremental file backups}</td>\r\n<td><input type=\"text\" id=\"max_file_incr\" value=\"#{max_file_incr}\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tMinimal number of incremental file backups}</td>\r\n<td><input type=\"text\" id=\"min_file_incr\" value=\"#{min_file_incr}\"/></td>\r\n</tr>\r\n<td>#{tMaximal number of full file backups}</td>\r\n<td><input type=\"text\" id=\"max_file_full\" value=\"#{max_file_full}\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tMinimal number of full file backups}</td>\r\n<td><input type=\"text\" id=\"min_file_full\" value=\"#{min_file_full}\"/></td>\r\n</tr>\r\n<td>#{tMaximal number of incremental image backups}</td>\r\n<td><input type=\"text\" id=\"max_image_incr\" value=\"#{max_image_incr}\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tMinimal number of incremental image backups}</td>\r\n<td><input type=\"text\" id=\"min_image_incr\" value=\"#{min_image_incr}\"/></td>\r\n</tr>\r\n<td>#{tMaximal number of full image backups}</td>\r\n<td><input type=\"text\" id=\"max_image_full\" value=\"#{max_image_full}\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tMinimal number of full image backups}</td>\r\n<td><input type=\"text\" id=\"min_image_full\" value=\"#{min_image_full}\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tDelay after system startup}</td>\r\n<td><input type=\"text\" id=\"startup_backup_delay\" value=\"#{startup_backup_delay}\"/> #{tmin}</td>\r\n</tr>\r\n<tr>\r\n<td>#{tBackup window}</td>\r\n<td><input type=\"text\" id=\"backup_window\" value=\"#{backup_window}\"/> <a href=\"http://www.urbackup.org/FAQ.php#backup_window\" target=\"_blank\">?</a></td>\r\n</tr>\r\n#{no_compname_start}\r\n<tr>\r\n<td>#{tComputer name}</td>\r\n<td><input type=\"text\" id=\"computername\" value=\"#{computername}\"/></td>\r\n</tr>\r\n#{no_compname_end}\r\n<tr>\r\n<td>#{tExcluded files (with wildcards)}</td>\r\n<td><input type=\"text\" id=\"exclude_files\" value=\"#{exclude_files}\"/> <a href=\"http://www.urbackup.org/FAQ.php#exclude_files\" target=\"_blank\">?</a></td>\r\n</tr>\r\n<tr>\r\n<td>#{tDefault directories to backup}</td>\r\n<td><input type=\"text\" id=\"default_dirs\" value=\"#{default_dirs}\"/> <a href=\"http://www.urbackup.org/FAQ.php#default_dirs\" target=\"_blank\">?</a></td>\r\n</tr>\r\n<tr>\r\n<td>#{tAllow client to change settings}</td>\r\n<td><input type=\"checkbox\" id=\"allow_overwrite\" #{allow_overwrite}/></td>\r\n</tr>");
tmpls.settings_user=new Template("<br />\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"formtable\">\n<tr>\n<td>#{tSeperate settings for this client}</td>\n<td><input type=\"checkbox\" onclick=\"updateUserOverwrite(#{clientid})\" id=\"overwrite\" #{overwrite} /></td>\n</tr>\n#{settings_inv}\n</table>\n<br />\n<br />\n<input type=\"button\" value=\"#{tSave}\" onClick=\"saveClientSettings(#{clientid})\" id=\"user_submit\" />");
tmpls.settings_users_start=new Template("<br />\n<br />\n<br />\n<table cellspacing=\"0\" cellpadding=\"0\">\n<tr>\t\t\t\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tUsername}</th>\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tRights}</th>\n\t<th style=\"width: 350px\" class=\"tabHeaderRight\">#{tActions}</th>\n</tr>\n#{rows}\n</table>\n<br />\n<br />\n<input type=\"button\" value=\"#{tCreate user}\" onclick=\"createUser()\"/>");
tmpls.settings_users_start_row=new Template("<tr>\n\t<td class=\"tabFLeft\">#{name}</td>\n\t<td class=\"tabFLeft\">#{rights}</td>\n\t<td class=\"tabFRight\"><input type=\"button\" value=\"#{tRemove}\" onclick=\"deleteUser(#{id})\" /> <input type=\"button\" value=\"#{tChange rights}\" onclick=\"changeUserRights(#{id}, '#{name}')\" /> <input type=\"button\" value=\"#{tChange password}\" onclick=\"changeUserPassword(#{id}, '#{name}')\" /></td>\n</tr>");
tmpls.settings_users_start_row_empty=new Template("<tr>\n\t<td class=\"tabFRight\" colspan=\"3\">#{tNo Users}</td>\n</tr>");
tmpls.settings_user_create=new Template("﻿<br />\r\n<form action=\"#\" onsubmit=\"createUser2(); return false;\">\r\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"formtable\">\r\n<tr>\r\n<td>#{tUsername}:</td>\r\n<td><input type=\"text\" size=\"40\" id=\"username\" value=\"\"/> </td>\r\n</tr>\r\n<tr>\r\n<td>#{tPassword}:</td>\r\n<td><input type=\"password\" id=\"password1\" value=\"\" size=\"40\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tRepeat password}:</td>\r\n<td><input type=\"password\" id=\"password2\" value=\"\" size=\"40\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tRights for}:</td>\r\n<td>#{rights}</td>\r\n</tr>\r\n</table>\r\n<br />\r\n<br />\r\n<input type=\"button\" value=\"#{tAbort}\" onclick=\"userSettings()\"> <input type=\"submit\" value=\"#{tCreate}\"/>\r\n</form>");
tmpls.settings_user_add_done=new Template("﻿<br />\r\n#{msg}\r\n<br />");
tmpls.login=new Template("<br />\r\n<form name=\"login1\" action=\"#\" onsubmit=\"return g.login1()\">\r\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"formtable\">\r\n<tr>\r\n<td>#{tUsername}:</td>\r\n<td><input type=\"text\" size=\"40\" id=\"username\" value=\"\" name=\"username\"/> </td>\r\n</tr>\r\n<tr>\r\n<td>#{tPassword}:</td>\r\n<td><input type=\"password\" id=\"password\" value=\"\" size=\"40\" name=\"password\"/></td>\r\n</tr>\r\n</table>\r\n<br />\r\n<br />\r\n<input type=\"submit\" value=\"#{tLogin}\"/>\r\n</form>");
tmpls.settings_user_create_admin=new Template("﻿<br />\r\n<form action=\"#\" onsubmit=\"createUser2(); return false;\">\r\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"formtable\">\r\n<tr>\r\n<td>#{tUsername}:</td>\r\n<td><input type=\"text\" size=\"40\" id=\"username\" value=\"admin\" disabled=\"disabled\"/> </td>\r\n</tr>\r\n<tr>\r\n<td>#{tPassword}:</td>\r\n<td><input type=\"password\" id=\"password1\" value=\"\" size=\"40\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tRepeat password}:</td>\r\n<td><input type=\"password\" id=\"password2\" value=\"\" size=\"40\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tRights for}</td>\r\n<td>#{rights}</td>\r\n</tr>\r\n</table>\r\n<br />\r\n<br />\r\n<input type=\"button\" value=\"#{tAbort}\" onclick=\"userSettings()\"> <input type=\"submit\" value=\"#{tCreate}\" />\r\n</form>");
tmpls.settings_user_rights_change=new Template("﻿<br />\r\n<strong>#{tChange rights for user}: #{username}</strong>\r\n<br />\r\n<form action=\"#\" onsubmit=\"submitChangeUserRights(#{userid}); return false;\">\r\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"formtable\" id=\"rightstable\">\r\n<tr>\r\n<th class=\"tabHeaderNB\">#{tDomain}</td>\r\n<th class=\"tabHeaderNB\">#{tRights}</td>\r\n<th class=\"tabHeaderNB\">#{tTranslation}</td>\r\n<th class=\"tabHeaderNB\">#{tActions}</td>\r\n</tr>\r\n#{rows}\r\n</table>\r\n<br />\r\n<a href=\"javascript: addNewDomain(#{userid}, '#{username}')\">#{tNew domain}</a>\r\n<br />\r\n<br />\r\n<input type=\"button\" value=\"#{tAbort}\" onclick=\"userSettings()\"> <input type=\"submit\" value=\"#{tChange}\" />\r\n</form>");
tmpls.settings_user_rights_change_row=new Template("﻿<tr>\r\n<td class=\"tabFNB\"><input type=\"text\" size=\"20\" value=\"#{domain}\" id=\"domain#{n}\" /></td>\r\n<td class=\"tabFNB\"><input type=\"text\" size=\"20\" value=\"#{right}\" id=\"right#{n}\" onchange=\"transRights()\" onkeyup=\"transRights()\"/></td>\r\n<td class=\"tabFNB\"><input type=\"text\" size=\"20\" value=\"\" id=\"right_trans#{n}\" disabled=\"distabled\" /></td>\r\n<td class=\"tabFNB\"><input type=\"button\" value=\"#{tDelete domain}\" onclick=\"deleteDomain(#{userid}, '#{username}', #{n})\" /></td>\r\n</tr>");
tmpls.settings_user_pw_change=new Template("﻿<br />\r\n<form action=\"#\" onsubmit=\"changeUserPW(#{userid}); return false;\">\r\n<strong>#{tChange password for user}: #{username}</strong>\r\n<br />\r\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"formtable\">\r\n<tr>\r\n<td>#{tPassword}:</td>\r\n<td><input type=\"password\" id=\"password1\" value=\"\" size=\"40\"/></td>\r\n</tr>\r\n<tr>\r\n<td>#{tRepeat password}:</td>\r\n<td><input type=\"password\" id=\"password2\" value=\"\" size=\"40\"/></td>\r\n</tr>\r\n</table>\r\n<br />\r\n<br />\r\n<input type=\"button\" value=\"#{tAbort}\" onclick=\"userSettings()\"> <input type=\"submit\" value=\"#{tChange}\" />\r\n</form>");
tmpls.logs_table=new Template("﻿<h1>#{tLogs}</h1>\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\r\n\t<th style=\"width: 25px\" class=\"tabHeader\">&nbsp;</th>\r\n\t<th style=\"width: 130px\" class=\"tabHeader\">#{tComputer name}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tBackup time}</th>\r\n\t<th style=\"width: 70px\" class=\"tabHeader\">#{tErrors}</th>\r\n\t<th style=\"width: 70px\" class=\"tabHeader\">#{tWarnings}</th>\r\n\t<th style=\"width: 300px\" class=\"tabHeaderRight\">#{tAction}</th>\r\n</tr>\r\n#{rows}\r\n</table>");
tmpls.logs_row=new Template("<tr onmouseover=\"tabMouseOver(this)\" onmouseout=\"tabMouseOut(this)\" onclick=\"g.tabMouseClickLogs(#{id})\">\r\n\t<td class=\"tabFLeftH\"></td>\r\n\t<td class=\"tabFLeftH\">#{name}</td>\r\n\t<td class=\"tabFLeftH\">#{time}</td>\r\n\t<td class=\"tabFLeftH\" style=\"#{estyle}\"><div style=\"background-color:white\">#{errors}</div></td>\r\n\t<td class=\"tabFLeftH\" style=\"#{wstyle}\"><div style=\"background-color:white\">#{warnings}</div></td>\r\n\t<td class=\"tabFRightH\">#{action}</td>\r\n</tr>");
tmpls.log_single=new Template("﻿<a href=\"javascript: show_logs1('#{params}')\">#{tBack}</a>\r\n\r\n<h1>#{tLog} (#{name})</h1>\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\r\n\t<th style=\"width: 50px\" class=\"tabHeader\">#{tLevel}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tTime}</th>\r\n\t<th style=\"width: 650px\" class=\"tabHeaderRight\">#{tMessage}</th>\r\n</tr>\r\n#{rows}\r\n</table>");
tmpls.log_single_row=new Template("<tr>\n\t<td class=\"tabFLeft\" style=\"#{lstyle}\"><div style=\"background-color: white\">#{level}</div></td>\n\t<td class=\"tabFLeft\"><div style=\"background-color: white\">#{time}</div></td>\n\t<td class=\"tabFRight\">#{message}</td>\n</tr>");
tmpls.log_single_none=new Template("﻿<tr>\n\t<td colspan=\"3\" class=\"tabFRight\">#{tNo entries for this filter}</td>\n</tr>");
tmpls.log_single_filter=new Template("#{tFilter}:\n<select size=\"1\" onchange=\"logFilterChange()\" id=\"logfilter\">\n\t<option value=\"2\">#{tErrors}</option>\n\t<option value=\"1\">#{tWarnings}</option>\n\t<option value=\"0\">#{tInfos}</option>\n</select>");
tmpls.logs_filter=new Template("<select size=\"1\" onchange=\"logsFilterChange()\" id=\"logsfilter\">\n\t<option value=\"2\">#{tErrors}</option>\n\t<option value=\"1\">#{tWarnings}</option>\n\t<option value=\"0\">#{tAll}</option>\n</select>");
tmpls.logs_none=new Template("﻿<tr>\r\n\t<td colspan=\"6\" class=\"tabFRight\">#{tNo entries for this filter}</td>\r\n</tr>");
tmpls.dir_error=new Template("<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\t\t\r\n\t<th style=\"border: 3px solid red; padding: 3px;width: 500px\">#{tdir_error_text}</th>\r\n</tr>\r\n<br>\r\n<br>");
tmpls.status_detail=new Template("<h1>#{tBackup status}</h1>\r\n\r\n#{dir_error}\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\t\t\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tComputer name}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tOnline}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tStatus}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tLast seen}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tLast file backup}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tLast image backup}</th>\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tFile backup status}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tImage backup status}</th>\r\n\t<th style=\"width: 200px\" class=\"#{class_prev}\">#{tIP}</th>\r\n#{Actions_start}\r\n\t<th style=\"width: 100px\" class=\"tabHeaderRight\">#{tActions}</td>\r\n#{Actions_end}\r\n</tr>\r\n#{rows}\r\n</table>\r\n<br>\r\n<h3>#{tExtra clients}</h3>\r\n\r\n<table cellspacing=\"0\" cellpadding=\"0\">\r\n<tr>\t\t\t\r\n\t<th style=\"width: 150px\" class=\"tabHeader\">#{tHostname/IP}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeader\">#{tOnline}</th>\r\n\t<th style=\"width: 200px\" class=\"tabHeaderRight\">#{tActions}</th>\r\n</tr>\r\n#{extra_clients_rows}\r\n</table>\r\n\r\n<form action=\"#\" onsubmit=\"addExtraClient(); return false;\">\r\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"formtable\">\r\n<tr>\r\n<td>#{tHostname/IP}:</td>\r\n<td><input type=\"text\" size=\"40\" id=\"hostname\" value=\"\"/> </td>\r\n<td><input type=\"submit\" value=\"#{tAdd}\"/></td>\r\n</tr>\r\n</table>\r\n</form>\n<br>\n<h3>#{tServer identity}</h3>\n#{server_identity}\n<br>");
tmpls.status_detail_extra_empty=new Template("<tr>\r\n\t<td class=\"tabFRight\" colspan=\"3\">#{tNo extra clients}</td>\r\n</tr>");
tmpls.status_detail_extra_row=new Template("<tr>\r\n\t<td class=\"tabFLeft\">#{hostname}</td>\r\n\t<td class=\"tabFLeft\">#{online}</td>\r\n\t<td class=\"tabFRight\"><input type=\"button\" value=\"#{tRemove}\" onClick=\"removeExtraClient(#{id})\"></td>\r\n</tr>");
tmpls.status_detail_row=new Template("<tr>\r\n\t<td class=\"tabFLeft\">#{name}</td>\r\n\t<td class=\"tabFLeft\">#{online}</td>\r\n\t<td class=\"tabFLeft\">#{status}</td>\r\n\t<td class=\"tabFLeft\">#{lastseen}</td>\r\n\t<td class=\"tabFLeft\">#{lastbackup}</td>\r\n\t<td class=\"tabFLeft\">#{lastbackup_image}</td>\r\n\t<td class=\"tabFLeft\" style=\"#{file_style}\"><div style=\"background-color:white\">#{file_ok_t}</div></td>\r\n\t<td class=\"tabFLeft\" style=\"#{image_style}\"><div style=\"background-color:white\">#{image_ok_t}</div></td>\r\n\t<td class=\"#{prev_tab_class}\">#{ip}</td>\r\n#{Actions_start}\r\n\t<td class=\"tabFRight\">\r\n#{Action_remove_start}\r\n\t<input type=\"button\" value=\"#{tRemove}\" onclick=\"removeClient(#{id})\" />\r\n#{Action_remove_end}\r\n\t</td>\t\r\n#{Actions_end}\r\n</tr>");
tmpls.status_row_delete_pending=new Template("<tr>\n\t<td class=\"tabFLeft\">#{name}</td>\n\t<td class=\"tabFRight\" colspan=\"#{colspan}\">\n\t#{tThis client is going to be removed.}\n#{stop_remove_start}\n\t<a href=\"javascript: stopRemove(#{id})\">#{tStop removing client}</a>\n#{stop_remove_stop}\n\t</td>\n</tr>");
