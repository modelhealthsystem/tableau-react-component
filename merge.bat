@echo off
ECHO SOURCE BRANCH IS %BUILD_SOURCEBRANCH%
SET sourceBranch=origin/%BUILD_SOURCEBRANCH:refs/heads/=%
ECHO %sourceBranch% STATUS
git status
ECHO %sourceBranch% ADD
git add .
ECHO %sourceBranch% COMMIT
git commit -am "CI Build Merge to Master [skip ci]"

REM ECHO CHECKOUT master
REM git checkout master
REM ECHO PULL master
REM git pull origin master
REM ECHO master STATUS
REM git status
REM ECHO MERGE %sourceBranch% into master
REM git merge %sourceBranch% -m "CI Build Merge to Master [skip ci]"

ECHO master STATUS
git status
ECHO master ADD
git add .
ECHO master COMMIT
git commit -am "CI Build Merge to Master [skip ci]"
ECHO master PUSH
git push origin