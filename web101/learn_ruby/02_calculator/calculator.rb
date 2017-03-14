#write your code here

def add(a,b)
  a+b
end

def subtract(a,b)
  a-b
end

def sum(arr)
  sum=0
  arr.each do |x|
    sum += x
  end
  sum
end

def multiply(a,b)
  a*b
end

def prod(arr)
  prod=1
  arr.each do |x|
    prod *= x
  end
  prod
end

# return x**y
def power(x,y)
  x**y
end

def factorial(n)
  (n==0)?1:prod((1..n).to_a);
end
