echo 'Starting my app' 
cd '/home/ec2-user/warnerbros-ui'
npm install
npm install -g @angular/cli
rm -rf dist
npm run ng build --prod --base-href /test
sudo cp -rf /home/ec2-user/warnerbros-ui/dist/warnerbros-ui /opt/tomcat/webapps
