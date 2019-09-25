echo 'Starting my app' 
cd '/home/ec2-user/AngularProject-WBUI'
npm install
npm install -g @angular/cli
ng build --prod
cp -rf /home/ec2-user/AngularProject-WBUI/opt/tomcat/webapps
