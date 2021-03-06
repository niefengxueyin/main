<?php

    /*
    |--------------------------------------------------------------------------
    | Register The Artisan Commands
    |--------------------------------------------------------------------------
    |
    | Each available Artisan command must be registered with the console so
    | that it is available to be called. We'll register every command so
    | the console gets access to each of the command object instances.
    |
    */

    Artisan::add(new ConvertMigrationsCommand);
    Artisan::add(new DropTables);
    Artisan::add(new DumpData);
    Artisan::add(new ImportData);
    Artisan::add(new MailLogsToAdministrator);