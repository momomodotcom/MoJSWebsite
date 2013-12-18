import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.nio.file.StandardCopyOption

String dgitString = ".git"
String renameTo   = "..git"
Lib.executeWithConfigWithIntereptionListenerWithLock(getClass(), args, { config ->
    config.dirs.each { filepath ->
        File from      = new File(config.root + filepath);

        File dgitFile  = new File(from, dgitString);
        File ddgitFile = new File(from, renameTo);

        if ( ddgitFile.exists() ) {
            Lib.out "Aborting. The ..git directory already exists. Please clean it up manually before proceeding!\n" +
                    "Path is: " + ddgitFile.getCanonicalPath()
            System.exit(0);
        }
        else {

            Path dotgitpath    = Paths.get(dgitFile.getCanonicalPath());
            Path dotdotgitpath = Paths.get(ddgitFile.getCanonicalPath());

            try {
                Files.move(
                        dotgitpath,
                        dotdotgitpath,
                        StandardCopyOption.REPLACE_EXISTING
                );
            } catch(e) {
                Lib.out "Aborting. Could not rename the directory .git to ..git " +
                        "Path is: " + directory.getCanonicalPath()
                System.exit(0);
            }

        }
    }

})