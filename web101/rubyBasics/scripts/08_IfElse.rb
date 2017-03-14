#!/usr/bin/ruby -w

x = 4


# standard if..elsif..else statements
if(x>10)
  puts "x>10"
elsif(x<5)
  puts "x<5"
else
  puts "in the middle!"
end


# if modifier
puts "if: x<5" if x<5

# unless statement
unless x>10
  puts "x<10"
else
  puts "x>10"
end

#unless modifier
puts "unless: x<10" unless x>10


# case, like switch
$age = 5
case $age
when $age<0
  puts "none!!"
when 0 .. 2
  puts "baby"
when 3 .. 6
  puts "little child"
when 7 .. 12
  puts "child"
when 13 .. 18
  puts "youth"
else
  puts "adult"
end
