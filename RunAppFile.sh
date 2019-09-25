echo 'Starting my app' 
cd '/home/ec2-user/warnerbros-ui'
npm install
npm install -g @angular/cli
npm run ng build
sudo cp -rf /home/ec2-user/warnerbros-ui /opt/tomcat/webapps
