echo 'Starting my app' 
cd '/home/ec2-user/warnerbros-ui'
npm install
npm install -g @angular/cli
npm run ng build
sed -i -e 's/Warnerbros/Warnerbros_/g' /home/ec2-user/warnerbros-ui/dist/warnerbros-ui/src/index.html
sudo cp -rf /home/ec2-user/warnerbros-ui/dist/warnerbros-ui /opt/tomcat/webapps
