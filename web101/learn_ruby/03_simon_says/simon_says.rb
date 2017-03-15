#write your code here


def echo(str)
  str
end

def shout(str)
  str.upcase
end

def repeat(str, n=2)
  new_str = "#{str}"
  (n-1).times do |i|
    new_str << " #{str}"
  end
  new_str
end

def start_of_word(str, n=1)
  str[0..(n-1)]
end

def first_word(str)
  str.split[0]
end

def titleize(str)
  little_words = ['a,' 'an', 'and', 'the', 'but', 'or', 'for', 'nor',
    'on', 'at', 'to', 'from', 'by', 'over']
  words = str.split

  new_str = "#{words[0].capitalize} "
  words[1...(words.length)].each do |w|
    if (little_words.include? w)
      new_str << "#{w} "
    else
      new_str << "#{w.capitalize} "
    end
  end
  new_str[0..-2]
end
