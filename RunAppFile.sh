echo 'Starting my app' 
cd '/home/ec2-user/warnerbros-ui'
npm install
npm install -g @angular/cli
rm -rf dist
npm run ng build --prod
file_contents=$(<./dist/warnerbros-ui/index.html)
echo "${file_contents//base href='/'/base href='.'}" > ./dist/warnerbros-ui/index.html
sudo cp -rf /home/ec2-user/warnerbros-ui/dist/warnerbros-ui /opt/tomcat/webapps
