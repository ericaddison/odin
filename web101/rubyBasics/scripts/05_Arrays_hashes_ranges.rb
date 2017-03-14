#!/usr/bin/ruby -w

# array literals
ary = ["hello", 123, 12.3, "last"]
ary.each do |item|
  puts item
end

# hash literals
colors = {"red" => 0xf00, "green" => 0x0f0, "blue" => 0x00f}
colors.each do |key, value|
  puts "#{key}: #{value}"
end

# range literals
(1..10).each do |i|
  print i, " "
end
print "\n"
