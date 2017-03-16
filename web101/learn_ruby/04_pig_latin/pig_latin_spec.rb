# # Topics
#
# * modules
# * strings
#
# # Pig Latin
#
# Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.
#
# Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.
#
# Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.
#
# (There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)
#
# See <http://en.wikipedia.org/wiki/Pig_latin> for more details.
#
#

require "pig_latin"

describe "alpha?" do
  it "recognizes a lowercase char" do
    s = alpha?('a')
    expect(s).to  be(true)
  end

  it "recognizes an uppercase char" do
    s = alpha?('F')
    expect(s).to  be(true)
  end

  it "does not recognize a number" do
    s = alpha?('1')
    expect(s).to  be(false)
  end

  it "does not recognize punctuation" do
    s = alpha?('.')
    expect(s).to  be(false)
  end

  it "recognizes an alpha string" do
    s = alpha?('abcD')
    expect(s).to  be(true)
  end

end

describe "upper?" do
  it "recognizes an uppercase letter" do
    s = upper? 'X'
    expect(s).to be(true)
  end

  it "recognizes a different uppercase letter" do
    s = upper? 'A'
    expect(s).to be(true)
  end

  it "recognizes an uppercase string" do
    s = upper? 'HELLO'
    expect(s).to be(true)
  end

  it "does not recognize a lowercase letter" do
    s = upper? 'x'
    expect(s).to be(false)
  end

  it "does not recognize a different lowercase letter" do
    s = upper? 'e'
    expect(s).to be(false)
  end

  it "does not recognize a lowercase string" do
    s = upper? 'abdc'
    expect(s).to be(false)
  end

  it "does not recognize a mixed string" do
    s = upper? 'abdcASD'
    expect(s).to be(false)
  end

  it "does not recognize a number" do
    s = upper? '4'
    expect(s).to be(false)
  end

  it "does not recognize a symbol" do
    s = upper? "~"
    expect(s).to be(false)
  end

end

describe "lower?" do
  it "recognizes a lowercase letter" do
    s = lower? 'x'
    expect(s).to be(true)
  end

  it "recognizes a different lowercase letter" do
    s = lower? 'a'
    expect(s).to be(true)
  end

  it "recognizes a lowercase string" do
    s = lower? 'hello'
    expect(s).to be(true)
  end

  it "does not recognize an uppercase letter" do
    s = lower? 'X'
    expect(s).to be(false)
  end

  it "does not recognize a different uppercase letter" do
    s = lower? 'E'
    expect(s).to be(false)
  end

  it "does not recognize an uppercase string" do
    s = lower? 'ABDC'
    expect(s).to be(false)
  end

  it "does not recognize a mixed string" do
    s = lower? 'abdcASD'
    expect(s).to be(false)
  end

  it "does not recognize a number" do
    s = lower? '4'
    expect(s).to be(false)
  end

  it "does not recognize a symbol" do
    s = lower? "~"
    expect(s).to be(false)
  end

end


describe "#translate" do

  it "translates a word beginning with a vowel" do
    s = translate("apple")
    expect(s).to eq("appleay")
  end

  it "translates a word beginning with a consonant" do
    s = translate("banana")
    expect(s).to eq("ananabay")
  end

  it "translates a word beginning with two consonants" do
    s = translate("cherry")
    expect(s).to eq("errychay")
  end

  it "translates two words" do
    s = translate("eat pie")
    expect(s).to eq("eatay iepay")
  end

  it "translates a word beginning with three consonants" do
    expect(translate("three")).to eq("eethray")
  end

  it "counts 'sch' as a single phoneme" do
    s = translate("school")
    expect(s).to eq("oolschay")
  end

  it "counts 'qu' as a single phoneme" do
    s = translate("quiet")
    expect(s).to eq("ietquay")
  end

  it "counts 'qu' as a consonant even when it's preceded by a consonant" do
    s = translate("square")
    expect(s).to eq("aresquay")
  end

  it "translates many words" do
    s = translate("the quick brown fox")
    expect(s).to eq("ethay ickquay ownbray oxfay")
  end

  # Test-driving bonus:
  # * write a test asserting that capitalized words are still capitalized (but with a different initial capital letter, of course)
  # * retain the punctuation from the original phrase

  it "recapitalizes correctly" do
    s = translate("Banana")
    expect(s).to eq("Ananabay")
  end

  it "maintains punctuation" do
    s = translate("This should be a good test, I think.")
    expect(s).to eq("Isthay ouldshay ebay aay oodgay esttay, Iay inkthay.")
  end


end
