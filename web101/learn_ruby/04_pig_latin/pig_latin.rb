#write your code here

$vowels = ['a', 'e', 'i', 'o', 'u']

def translate(str)
  new_str = ""
  (str.split).each do |word|
    new_str << translate_word(word) << " "
  end
  new_str.to_s.strip
end

def translate_word(str)
  first, last, str = check_for_punctuation(str)
  sa = get_shift_amount(str)
  str = pig_shift(sa,str)
  str = "#{first}#{str}#{last}"
end

def check_for_punctuation(str)
  first = ""
  last = ""
  if !(alpha? str[0])
    first = str[0]
    str = str[1..-1]
  end
  if !(alpha? str[-1])
    last = str[-1]
    str = str[0..-2]
  end
  [first, last, str]
end

# determine how many chars need to be shifted to the back
def get_shift_amount(str)
  if $vowels.include? str[0].downcase
    0
  elsif str[0..1] == 'qu'
    2
  elsif $vowels.include? str[1].downcase
    1
  elsif str[1..2] == 'qu'
    3
  elsif $vowels.include? str[2].downcase
    2
  elsif $vowels.include? str[3].downcase
    3
  end
end

# perform the char shifting
def pig_shift(ind, str)
  need_up_case = upper? str[0]
  if need_up_case
    str = "#{str[ind].upcase}#{str[(ind+1)..-1]}#{str[0...ind].downcase}ay"
  else
    str = "#{str[ind]}#{str[(ind+1)..-1]}#{str[0...ind]}ay"
  end
  str
end

# determine if a string is all lowercase
def lower?(str)
  !!str.match('^[a-z]+$');
end

# determing if a string is all uppercase
def upper?(str)
  !!str.match('^[A-Z]+$');
end

#_determine if a string is all letters (no whitespace)
def alpha?(str)
    !!str.match('^[a-zA-Z]+$');
end
