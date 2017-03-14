#!/usr/bin/ruby -w

# regular while loop
i=0
n=10
while i<n do
  print i, " "
  i+=1
end
puts

# while like a do while
i=0
begin
  print i, " "
  i+=1
end while i < 10
puts

# until
i=0
until i == 10
  print i, " "
  i+=1
end
puts

# for loop
for j in (0...10)
  print j, " "
end
puts

# each loop
(0...10).each do |j|
  print j, " "
end
puts

# redo -- should restart the current iteration
(1...10).each do |j|
  if j < 4
    j +=1
    redo
  end
  print j, " "
end
puts
# here I found that it does not reset values or anything, just moves back to
# the top of the loop ... printed out 4 for the first 5 iterations

# ruby has break like normal, and next instead of continue

# ruby has a retry keyword which is typically put into a 'rescue' block,
# which might be kind of like a catch??? Retry restarts the current iteration
