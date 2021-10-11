var searchIndex = JSON.parse('{\
"env_logger":{"doc":"A simple logger that can be configured via environment …","t":[13,13,3,17,17,3,3,13,13,13,13,4,4,11,11,11,11,11,11,11,5,11,11,11,11,11,11,0,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,11,11,5,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,11,5,11,11,11,11,11,11,11,11,11,12,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,13,13,13,13,13,4,13,3,13,13,13,13,13,13,13,13,13,13,13,13,3,3,4,3,4,13,4,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12],"n":["Always","Auto","Builder","DEFAULT_FILTER_ENV","DEFAULT_WRITE_STYLE_ENV","Env","Logger","Never","Pipe","Stderr","Stdout","Target","WriteStyle","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","build","builder","default","default","default_filter_or","default_format","default_write_style_or","enabled","filter","filter","filter","filter","filter_level","filter_module","filter_or","flush","fmt","fmt","fmt","fmt","format","format_indent","format_level","format_module_path","format_suffix","format_target","format_timestamp","format_timestamp_micros","format_timestamp_millis","format_timestamp_nanos","format_timestamp_secs","from","from","from","from","from_default_env","from_default_env","from_env","from_env","from_env","init","init","init_from_env","into","into","into","is_test","log","matches","new","new","parse_default_env","parse_env","parse_filters","parse_write_style","target","try_from","try_from","try_from","try_init","try_init","try_init_from_env","try_into","try_into","try_into","type_id","type_id","type_id","write_style","write_style","write_style_or","0","Builder","Filter","borrow","borrow","borrow_mut","borrow_mut","build","default","enabled","filter","filter","filter_level","filter_module","fmt","fmt","from","from","from_env","into","into","matches","new","parse","try_from","try_from","try_into","try_into","type_id","type_id","Always","Ansi256","Auto","Black","Blue","Color","Cyan","Formatter","Green","Magenta","Micros","Millis","Nanos","Never","Pipe","Red","Rgb","Seconds","Stderr","Stdout","Style","StyledValue","Target","Timestamp","TimestampPrecision","White","WriteStyle","Yellow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","default","default","default","default_level_style","default_styled_level","eq","eq","flush","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","hash","into","into","into","into","into","into","into","into","ne","set_bg","set_bold","set_color","set_dimmed","set_intense","style","timestamp","timestamp_micros","timestamp_millis","timestamp_nanos","timestamp_seconds","to_owned","to_owned","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","value","write","0","0","1","2","0"],"q":["env_logger","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","env_logger::Target","env_logger::filter","","","","","","","","","","","","","","","","","","","","","","","","","","","","","env_logger::fmt","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","env_logger::fmt::Color","","","","env_logger::fmt::Target"],"d":["Try very hard to print styles.","Try to print styles, but don’t force the issue.","<code>Builder</code> acts as builder for initializing a <code>Logger</code>.","The default name for the environment variable to read …","The default name for the environment variable to read …","Set of environment variables to configure from.","The env logger.","Never print styles.","Logs will be sent to a custom pipe.","Logs will be sent to standard error.","Logs will be sent to standard output.","Log target, either <code>stdout</code>, <code>stderr</code> or a custom pipe.","Whether or not to print styles to the target.","","","","","","","Build an env logger.","Create a new builder with the default environment …","","","Use the default environment variable to read the filter …","Use the default format.","Use the default environment variable to read the style …","","Filtering for log records.","Returns the maximum <code>LevelFilter</code> that this env logger …","Specify an environment variable to read the filter from.","Adds filters to the logger.","Adds a directive to the filter for all modules.","Adds a directive to the filter for a specific module.","Specify an environment variable to read the filter from.","","Formatting for log records.","","","","Sets the format function for formatting the log output.","Configures the amount of spaces to use to indent multiline …","Whether or not to write the level in the default format.","Whether or not to write the module path in the default …","Configures the end of line suffix.","Whether or not to write the target in the default format.","Configures if timestamp should be included and in what …","Configures the timestamp to use microsecond precision.","Configures the timestamp to use millisecond precision.","Configures the timestamp to use nanosecond precision.","Configures the timestamp to use second precision.","","","","","Creates the logger from the environment using default …","Initializes the log builder from the environment using …","Create a builder from the given environment variables.","Creates the logger from the environment.","Initializes the log builder from the environment.","Initializes the global logger with an env logger.","Initializes the global logger with the built env logger.","Initializes the global logger with an env logger from the …","","","","Sets whether or not the logger will be used in unit tests.","","Checks if this record matches the configured filter.","Get a default set of environment variables.","Initializes the log builder with defaults.","Applies the configuration from the environment using …","Applies the configuration from the environment.","Parses the directives string in the same form as the …","Parses whether or not to write styles in the same form as …","Sets the target for the log output.","","","","Attempts to initialize the global logger with an env …","Initializes the global logger with the built env logger.","Attempts to initialize the global logger with an env …","","","","","","","Specify an environment variable to read the style from.","Sets whether or not styles will be written.","Specify an environment variable to read the style from.","","A builder for a log filter.","A log filter.","","","","","Build a log filter.","","Determines if a log message with the specified metadata …","Returns the maximum <code>LevelFilter</code> that this filter instance …","Adds a directive to the filter.","Adds a directive to the filter for all modules.","Adds a directive to the filter for a specific module.","","","","","Initializes the filter builder from an environment.","","","Checks if this record matches the configured filter.","Initializes the filter builder with defaults.","Parses the directives string.","","","","","","","Try very hard to print styles.","","Try to print styles, but don’t force the issue.","","","The set of available colors for the terminal …","","A formatter to write logs into.","","","Microsecond precision (6 decimal digits)","Millisecond precision (3 decimal digits)","Nanosecond precision (9 decimal digits)","Never print styles.","Logs will be sent to a custom pipe.","","","Full second precision (0 decimal digits)","Logs will be sent to standard error.","Logs will be sent to standard output.","A set of styles to apply to the terminal output.","A value that can be printed using the given styles.","Log target, either <code>stdout</code>, <code>stderr</code> or a custom pipe.","An RFC3339 formatted timestamp.","Formatting precision of timestamps.","","Whether or not to print styles to the target.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Get the default <code>Style</code> for the given level.","Get a printable <code>Style</code> for the given level.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Set the background color.","Set the text weight.","Set the text color.","Set whether the text is dimmed.","Set the text intensity.","Begin a new <code>Style</code>.","Get a <code>Timestamp</code> for the current date and time in UTC.","Get a <code>Timestamp</code> for the current date and time in UTC with …","Get a <code>Timestamp</code> for the current date and time in UTC with …","Get a <code>Timestamp</code> for the current date and time in UTC with …","Get a <code>Timestamp</code> for the current date and time in UTC with …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Wrap a value in the style.","","","","","",""],"i":[1,1,0,0,0,0,0,1,2,2,2,0,0,3,4,5,3,4,5,5,0,4,5,4,5,4,3,0,3,4,5,5,5,4,3,0,3,4,5,5,5,5,5,5,5,5,5,5,5,5,3,4,4,5,3,5,0,3,5,0,5,0,3,4,5,5,3,3,4,5,5,5,5,5,5,3,4,5,0,5,0,3,4,5,3,4,5,4,5,4,6,0,0,7,8,7,8,8,8,7,7,8,8,8,7,8,7,8,8,7,8,7,8,8,7,8,7,8,7,8,1,9,1,9,9,0,9,0,9,9,10,10,10,1,2,9,9,10,2,2,0,0,0,0,0,9,0,9,11,12,2,13,14,9,1,10,11,12,2,13,14,9,1,10,14,9,1,10,14,9,1,10,2,1,10,13,13,9,1,13,11,11,12,12,12,12,12,12,12,12,12,2,13,14,9,1,10,11,12,2,13,14,9,1,10,1,11,12,2,13,14,9,1,10,9,14,14,14,14,14,13,13,13,13,13,13,14,9,1,10,11,12,11,12,2,13,14,9,1,10,11,12,2,13,14,9,1,10,11,12,2,13,14,9,1,10,14,13,15,16,16,16,6],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[],["logger",3]],[[],["builder",3]],[[]],[[],["builder",3]],[[]],[[]],[[]],[[["metadata",3]],["bool",15]],null,[[],["levelfilter",4]],[[]],[[["str",15],["levelfilter",4],["option",4,["str"]]]],[[["levelfilter",4]]],[[["str",15],["levelfilter",4]]],[[]],[[]],null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[["usize",15],["option",4,["usize"]]]],[[["bool",15]]],[[["bool",15]]],[[["str",15]]],[[["bool",15]]],[[["option",4,["timestampprecision"]],["timestampprecision",4]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["builder",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["bool",15]]],[[["record",3]]],[[["record",3]],["bool",15]],[[]],[[],["builder",3]],[[]],[[]],[[["str",15]]],[[["str",15]]],[[["target",4]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],[["result",4,["setloggererror"]],["setloggererror",3]]],[[],[["result",4,["setloggererror"]],["setloggererror",3]]],[[],[["result",4,["setloggererror"]],["setloggererror",3]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[["writestyle",4]]],[[]],null,null,null,[[]],[[]],[[]],[[]],[[],["filter",3]],[[]],[[["metadata",3]],["bool",15]],[[],["levelfilter",4]],[[["str",15],["levelfilter",4],["option",4,["str"]]]],[[["levelfilter",4]]],[[["str",15],["levelfilter",4]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[["str",15]],["builder",3]],[[]],[[]],[[["record",3]],["bool",15]],[[],["builder",3]],[[["str",15]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["style",3]],[[],["color",4]],[[],["writestyle",4]],[[],["timestampprecision",4]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["level",4]],["style",3]],[[["level",4]],[["level",4],["styledvalue",3,["level"]]]],[[["color",4]],["bool",15]],[[["writestyle",4]],["bool",15]],[[],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["color",4]],["bool",15]],[[["color",4]],["style",3]],[[["bool",15]],["style",3]],[[["color",4]],["style",3]],[[["bool",15]],["style",3]],[[["bool",15]],["style",3]],[[],["style",3]],[[],["timestamp",3]],[[],["timestamp",3]],[[],["timestamp",3]],[[],["timestamp",3]],[[],["timestamp",3]],[[]],[[]],[[]],[[]],[[],["string",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["styledvalue",3]],[[],[["usize",15],["result",6,["usize"]]]],null,null,null,null,null],"p":[[4,"WriteStyle"],[4,"Target"],[3,"Logger"],[3,"Env"],[3,"Builder"],[13,"Pipe"],[3,"Filter"],[3,"Builder"],[4,"Color"],[4,"TimestampPrecision"],[3,"Timestamp"],[3,"StyledValue"],[3,"Formatter"],[3,"Style"],[13,"Ansi256"],[13,"Rgb"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};