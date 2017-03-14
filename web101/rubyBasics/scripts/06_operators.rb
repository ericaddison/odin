#!/usr/bin/ruby -w

=begin
Here is a block comment.
=end

# ternary operator
a = (1<10)?5:-5
puts a

# comparator operator
a=1
b=2
c=1
puts "a<=>b = #{(a<=>b)}"
puts "b<=>c = #{(b<=>c)}"
puts "c<=>a = #{(c<=>a)}"

# type and value equality
a = 1.0
b = 1.0
puts "1 eql? (1.0) = #{1.eql?(1.0)}"
puts "a == b = #{a==(b)}"
puts "a eql? (b) = #{a.eql?(b)}"
puts "a equal? (b) = #{a.equal?(b)}"

# inclusive and exclusive ranges
(1..10).each do |i|
  print i, " "
end
print "\n"
(1...10).each do |i|
  print i, " "
end
print "\n"

# defined? method
puts "is a defined? #{defined? a}"
puts "is x defined? #{defined? x}"
puts "is puts defined? #{defined? puts}"
