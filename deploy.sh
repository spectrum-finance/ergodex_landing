  #!/bin/bash

echo "Start deploy"
ssh -tq root@144.76.60.105 '/bin/bash -l -c "source ~/.nvm/nvm.sh; cd /var/www/landing; git pull origin master;"'
echo "Deployed Successfully!"

exit 0
