echo 'Starting my app' 
cd '/home/ec2-user/warnerbros-ui'
npm install
npm install -g @angular/cli
ng build --prod
cp -rf /home/ec2-user/warnerbros-ui /opt/tomcat/webapps
