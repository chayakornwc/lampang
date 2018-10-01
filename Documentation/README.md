
# Setting up local environment
KitnipanDrivehub edited this page on Aug 6 · 10 revisions
```

install latest node and npm.
install brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
clone this repository and execute commands below
brew install ruby
brew install postgresql
brew install postgis
brew install redis
brew install yarn
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

gem install bundler
- Navigate to your project-root directory.
bundle install
npm install -g n
sudo n lts
yarn install

brew services start postgresql
redis-server
rails db:create
Import data from our staging
Export db from Drivehub-staging app [how to export](https://devcenter.heroku.com/articles/heroku-postgres-import-export)
pg_restore --verbose --no-acl --no-owner --clean -h localhost -U <your local machine username> -d drivehub_development ~/Downloads/<db file downloaded from heroku>
run a local server with rails s.
`
Debugging in Visual Studio Code
`

Install Ruby extension
Go to Debug view (⇧⌘D)
Select breaking point
Start Debugging 
- F5 to Continue/Pause
- F10 to Step Over
- F11 to Step Into
- ⇧F11 to Step Out
- ⇧⌘F5 to Restart
- ⇧F5 to Stop
*Data inspection : Variables can be inspected in the VARIABLES section of the Debug view.
