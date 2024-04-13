# My MongoDB boiler plate

At the moment, it's just me messing around with MongoDB and Mongoose to learn how to use them in future projects

## NPM Packages
| Name     | Description                                         | Required           |
|:---------|:----------------------------------------------------|:-------------------|
| dotenv   | Used to read data from .env files                   | Only if you needed |
| mongodb  | Connect with your MongoDB database                  | Yes                |
| mongoose | Connect with your MongoDB database, but made easier | Yes                |

## Infos
If you use MongoDB on Windows and launch node via WSL, don't forget to :
 + go to `$MONGO_INSTALL/bin/mongod.config` and change `bindIp:` to `0.0.0.0`
 + use local IPv4 to connect to MongoDB (can be found with `ipconfig`)

## Links
[Mongoose Manual](https://mongoosejs.com/docs)