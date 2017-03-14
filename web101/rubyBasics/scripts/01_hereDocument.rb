#!/usr/bin/ruby -w

# simple here document
print <<EOF   # note MUST have no space between << and EOF (or whatever)
  Here is a here document!
  I wonder if it will work!!?!?!
EOF

print <<"EOF"
  This one is the same!
EOF

# a here document containing shell commands
print <<`EOC`
  echo "hi there!"
  pwd
EOC

# stacking IDs
print <<"foo", <<"bar"
  I said foo!
foo
  I said bar!
bar
