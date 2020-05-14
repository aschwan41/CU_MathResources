del /F /Q.\dist
mkdir .\dist\assets
mkdir .\dist\chapters
copy  .\assets\* .\dist\assets\*
copy  .\chapters\* .\dist\chapters\*
parcel index.html