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
  first = ""
  last = ""
  if !(alpha_char? str[0])
    first = str[0]
    str = str[1..-1]
  end
  if !(alpha_char? str[-1])
    last = str[-1]
    str = str[0..-2]
  end

  if $vowels.include? str[0].downcase
    str = pig_shift(0,str)

  elsif str[0..1] == 'qu'
    str = pig_shift(2,str)

  elsif $vowels.include? str[1].downcase
    str = pig_shift(1,str)

  elsif str[1..2] == 'qu'
    str = pig_shift(3,str)

  elsif $vowels.include? str[2].downcase
    str = pig_shift(2,str)

  elsif $vowels.include? str[3].downcase
    str = pig_shift(3,str)
  end

  str = "#{first}#{str}#{last}"
end

def pig_shift(ind, str)
  need_up_case = upper? str[0]
  if need_up_case
    str = "#{str[ind].upcase}#{str[(ind+1)..-1]}#{str[0...ind].downcase}ay"
  else
    str = "#{str[ind]}#{str[(ind+1)..-1]}#{str[0...ind]}ay"
  end
  str
end

def lower?(char)
  char >= 'a' and char <= 'z'
end

def upper?(char)
  !(lower? char)
end

def alpha_char?(char)
    c = char.downcase
    c >= 'a' and c <= 'z'
end
