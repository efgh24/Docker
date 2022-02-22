console.log("Hello Docker!");

/* in ~/hello-docker terminal create a container by the following */
/* docker build -t hello-docker . */

/* two ways to see docker images: */
/* docker images */
/* docker image ls */

/* run image */
/* docker run hello-docker */

/* rather than docker pull ubuntu we're going to docker run ubuntu */

/* docker ps shows a list of running containers */
/* docker ps -a shows the stopped containers */

/* docker run -it ubuntu starting a container and interacting with it */

/* linux commands */
/* echo hello */
/* whoami */
/* echo $0 shows the location of the shell program */
/* return /bash short for born again shell */
/* history returns previous commands */
/* !# - returns the previous command */
/* apt (advanced package tool) ubuntu package manager means */
/* apt install nano #installs package nano if package is available */
/* app list #because nano isn't installed */
/* apt update: updates the lists of package */
/* apt install nano #to finally install nano */
/* apt remove nano #removes nano installation */
/* apt install python3*/
/* python3 */
/* quit() */
/* apt remove python3 */

/* navigating linux directory */
/* pwd print working directory */
/* ls list */
/* ls -1 list files individually */
/* ls -l long listing */
/* permissions | user who owns directory file | size | date  */
/* cd change directory */
/* cd .. go one directory up */
/* ls bin list everything in the bin folder */
/* cd ~ goes to home directory */
/* mkdir test */
/* mv test docker */
/* touch hello.txt */
/* mv hello.txt /etc */
/* mv hello.txt hello-docker.txt */
/* rm hello-docker.txt removes file */
/* rm -r docker */

/* apt install nano */
/* nano file.txt */
/* cat file.txt */
/* more file.txt */
/* more /etc/adduser.conf # allows to see files page by page, press space (go by page) or enter (by line)*/
/* apt install less able to scroll up & down, as well as by page (space) or line (enter) */
/* head -n 5 first 5 lines */
/* tail -n 5 last 5 lines */
/* redirecting output of files */
/* cat file1.txt > file2.txt */
