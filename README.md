# ubcst.github.io

## Writing a New Post
Please see [this wiki page](https://github.com/supermileage/supermileage.github.io/wiki/Writing-a-New-Post) for instructions. If you are only going to be writing posts, you can ignore the rest of this readme.

## Installation

Clone the repo onto your own computer.

### Linux/OSX

Install the following (in order):
- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [RubyGems](https://rubygems.org/pages/download)

Navigate to the repo on your computer in terminal and run the following commands:
- `gem install bundler`
- `bundle install`
### Windows

You can follow the Linux/OSX instructions, or:

- Open a command prompt (cmd.exe) with administrator access
- Run '@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin' (you can right click paste in CMD)
- Close and reopen cmd
- Run the following commands:
- `choco install ruby -y`
- `gem install bundler`
- `bundle install`

## Running the Project
In the same directory, run:
- `$ jekyll serve`

You can now browse to [localhost:4000](http://localhost:4000/) to view the site. There's no need to restart jekyll after you make changes, it will update automatically.
