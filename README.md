# karlisbikis.com © 2012

Some repo files are encrypted, how to decrypt:
* install git-crypt `brew install git-crypt`
* copy decryption key from repo's [secrets](/settings/variables/actions)
* decode the key and save it to file `pbpaste | base64 -d -o git-crypt-key`
* unlock `git-crypt unlock git-crypt-key`
