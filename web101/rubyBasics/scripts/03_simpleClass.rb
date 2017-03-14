#!/usr/bin/ruby -w

class Customer

# a class variable (like static)
  @@no_of_customers=0

# the initialize method, like a ctor
  def initialize(name, addr)
    @cust_id = @@no_of_customers
    @cust_name = name
    @cust_addr = addr
    @@no_of_customers += 1
  end

# a class method
  def print
    puts "Customer #@cust_id info"
    puts "-------------------------"
    puts "Name: #@cust_name"
    puts "Addr: #@cust_addr"
    puts ""
  end

  def total_no_of_customers
    return @@no_of_customers
  end

end

cust1 = Customer.new("Drin", "USA")
cust2 = Customer.new("Rin", "TX, USA")

cust1.print
cust2.print

puts "Total number of customers = #{cust1.total_no_of_customers}"
