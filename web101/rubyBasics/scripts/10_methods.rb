#!/usr/bin/ruby -w

# a simple no-arg method
def simple_method
  puts "I am a simple method!"
end

simple_method

# a two arg method
def two_arg_method(arg1, arg2)
  puts "Here are my args: #{arg1}, #{arg2}"
end

two_arg_method "abc", 123

# a two arg method with defaults
def two_arg_method_defaults(arg1=0, arg2="020202")
  puts "Here are my args: #{arg1}, #{arg2}"
end

two_arg_method_defaults "abc"

# return values
def one_return
  x=10
end

puts "return value: #{one_return}"


# mutiple return values
def multiple_return_values
  x="hi"
  return 1, 2, x
end
a, b, c = multiple_return_values
puts "a=#{a}, b=#{b}, c=#{c}"
