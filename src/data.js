/*
 * Daily Tarot
 * Authored by Benny Schmidt
 */

const cards = [
  {
    id: `XXXX`,
    name: `Background`,
    image: require(`./assets/img/_XXXX_CardStack.png`),
    meaning: ``
  },
  {
    id: `XXXX`,
    name: `CardBack`,
    image: require(`./assets/img/_XXXX_CardBack.png`),
    meaning: ``
  },
  {
    id: `0000`,
    name: `The Magician`,
    image: require(`./assets/img/_0000_The-Magician.png`),
    meaning: `Creation, desire, trickery, willpower.`
  },
  {
    id: `0001`,
    name: `The High Priestess`,
    image: require(`./assets/img/_0001_The-High-Priestess.png`),
    meaning: `Belief, premonition, secrecy, wisdom.`
  },
  {
    id: `0002`,
    name: `The Empress`,
    image: require(`./assets/img/_0002_The-Empress.png`),
    meaning: `Fertility, motherhood, nature, dependence.`
  },
  {
    id: `0003`,
    name: `The Emperor`,
    image: require(`./assets/img/_0003_The-Emperor.png`),
    meaning: `Authority, fatherhood, stucture, tyranny.`
  },
  {
    id: `0004`,
    name: `The Hierophant`,
    image: require(`./assets/img/_0004_The-Hierophant.png`),
    meaning: `Conformity, convention, mentorship, tradition.`
  },
  {
    id: `0005`,
    name: `The Lovers`,
    image: require(`./assets/img/_0005_The-Lovers.png`),
    meaning: `Bliss, equality, friendship, duality.`
  },
  {
    id: `0006`,
    name: `The Chariot`,
    image: require(`./assets/img/_0006_The-Chariot.png`),
    meaning: `Aggression, control, direction, focus.`
  },
  {
    id: `0007`,
    name: `Strength`,
    image: require(`./assets/img/_0007_Strength.png`),
    meaning: `Bravery, charisma, compassion, determination.`
  },
  {
    id: `0008`,
    name: `The Hermit`,
    image: require(`./assets/img/_0008_The-Hermit.png`),
    meaning: `Boredom, contemplation, guidance, isolation.`
  },
  {
    id: `0009`,
    name: `Wheel of Fortune`,
    image: require(`./assets/img/_0009_Wheel-of-Fortune.png`),
    meaning: `Cycles, luck, fate, repetition.`
  },
  {
    id: `0010`,
    name: `Justice`,
    image: require(`./assets/img/_0010_Justice.png`),
    meaning: `Consequence, revelation, truth, understanding.`
  },
  {
    id: `0011`,
    name: `The Hanged Man`,
    image: require(`./assets/img/_0011_The-Hanged-Man.png`),
    meaning: `Hesitation, martyrdom, release, sacrifice.`
  },
  {
    id: `0012`,
    name: `Death`,
    image: require(`./assets/img/_0012_Death.png`),
    meaning: `Beginning, change, ending, transition.`
  },
  {
    id: `0013`,
    name: `Temperance`,
    image: require(`./assets/img/_0013_Temperance.png`),
    meaning: `Balance, honesty, meaning, patience.`
  },
  {
    id: `0014`,
    name: `The Devil`,
    image: require(`./assets/img/_0014_The-Devil.png`),
    meaning: `Addiction, freedom, fun, materialism.`
  },
  {
    id: `0015`,
    name: `The Tower`,
    image: require(`./assets/img/_0015_The-Tower.png`),
    meaning: `Disaster, expulsion, rejection, upheaval.`
  },
  {
    id: `0016`,
    name: `The Star`,
    image: require(`./assets/img/_0016_The-Star.png`),
    meaning: `Faith, hope, insecurity, rejuvenation.`
  },
  {
    id: `0017`,
    name: `The Moon`,
    image: require(`./assets/img/_0017_The-Moon.png`),
    meaning: `Illusion, intuition, confusion, fear.`
  },
  {
    id: `0018`,
    name: `The Sun`,
    image: require(`./assets/img/_0018_The-Sun.png`),
    meaning: `Joy, positivity, power, success.`
  },
  {
    id: `0019`,
    name: `Judgment`,
    image: require(`./assets/img/_0019_Judgment.png`),
    meaning: `Awakening, awareness, doubt, reflection.`
  },
  {
    id: `0020`,
    name: `The World`,
    image: require(`./assets/img/_0020_The-World.png`),
    meaning: `Closure, completion, fulfillment, harmony.`
  },
  {
    id: `0021`,
    name: `The Fool`,
    image: require(`./assets/img/_0021_The-Fool.png`),
    meaning: `Carelessness, innocence, naïveté, wit.`
  },
  {
    id: `0022`,
    name: `King of Cups`,
    image: require(`./assets/img/_0022_King-of-Cups.png`),
    meaning: `Knowledge, emotional control.`
  },
  {
    id: `0023`,
    name: `Queen of Cups`,
    image: require(`./assets/img/_0023_Queen-of-Cups.png`),
    meaning: `Comfort, calmness.`
  },
  {
    id: `0024`,
    name: `Knight of Cups`,
    image: require(`./assets/img/_0024_Knight-of-Cups.png`),
    meaning: `Disappointment, idealism.`
  },
  {
    id: `0025`,
    name: `Page of Cups`,
    image: require(`./assets/img/_0025_Page-of-Cups.png`),
    meaning: `Immaturity, sensitivity.`
  },
  {
    id: `0026`,
    name: `Ten of Cups`,
    image: require(`./assets/img/_0026_Ten-of-Cups.png`),
    meaning: `Happiness, family.`
  },
  {
    id: `0027`,
    name: `Nine of Cups`,
    image: require(`./assets/img/_0027_Nine-of-Cups.png`),
    meaning: `Luxury, satisfaction.`
  },
  {
    id: `0028`,
    name: `Eight of Cups`,
    image: require(`./assets/img/_0028_Eight-of-Cups.png`),
    meaning: `Avoidance, disenchantment.`
  },
  {
    id: `0029`,
    name: `Seven of Cups`,
    image: require(`./assets/img/_0029_Seven-of-Cups.png`),
    meaning: `Choice, purpose.`
  },
  {
    id: `0030`,
    name: `Six of Cups`,
    image: require(`./assets/img/_0030_Six-of-Cups.png`),
    meaning: `Familiarity, independence.`
  },
  {
    id: `0031`,
    name: `Five of Cups`,
    image: require(`./assets/img/_0031_Five-of-Cups.png`),
    meaning: `Grief, pity.`
  },
  {
    id: `0032`,
    name: `Four of Cups`,
    image: require(`./assets/img/_0032_Four-of-Cups.png`),
    meaning: `Acceptance, apathy.`
  },
  {
    id: `0033`,
    name: `Three of Cups`,
    image: require(`./assets/img/_0033_Three-of-Cups.png`),
    meaning: `Community, gossip.`
  },
  {
    id: `0034`,
    name: `Two of Cups`,
    image: require(`./assets/img/_0034_Two-of-Cups.png`),
    meaning: `Connection, partnership.`
  },
  {
    id: `0035`,
    name: `Ace of Cups`,
    image: require(`./assets/img/_0035_Ace-of-Cups.png`),
    meaning: `Emptiness, spirituality.`
  },
  {
    id: `0036`,
    name: `King of Coins`,
    image: require(`./assets/img/_0036_King-of-Coins.png`),
    meaning: `Abundance, security.`
  },
  {
    id: `0037`,
    name: `Queen of Coins`,
    image: require(`./assets/img/_0037_Queen-of-Coins.png`),
    meaning: `Financial security, pragmatism.`
  },
  {
    id: `0038`,
    name: `Knight of Coins`,
    image: require(`./assets/img/_0038_Knight-of-Coins.png`),
    meaning: `Efficiency, responsibility.`
  },
  {
    id: `0039`,
    name: `Page of Coins`,
    image: require(`./assets/img/_0039_Page-of-Coins.png`),
    meaning: `Ambition, greed.`
  },
  {
    id: `0040`,
    name: `Ten of Coins`,
    image: require(`./assets/img/_0040_Ten-of-Coins.png`),
    meaning: `Inheritance, legacy.`
  },
  {
    id: `0041`,
    name: `Nine of Coins`,
    image: require(`./assets/img/_0041_Nine-of-Coins.png`),
    meaning: `Reward, spending.`
  },
  {
    id: `0042`,
    name: `Eight of Coins`,
    image: require(`./assets/img/_0042_Eight-of-Coins.png`),
    meaning: `Education, passion.`
  },
  {
    id: `0043`,
    name: `Seven of Coins`,
    image: require(`./assets/img/_0043_Seven-of-Coins.png`),
    meaning: `Diligence, distraction.`
  },
  {
    id: `0044`,
    name: `Six of Coins`,
    image: require(`./assets/img/_0044_Six-of-Coins.png`),
    meaning: `Domination, generosity.`
  },
  {
    id: `0045`,
    name: `Five of Coins`,
    image: require(`./assets/img/_0045_Five-of-Coins.png`),
    meaning: `Charity, poverty.`
  },
  {
    id: `0046`,
    name: `Four of Coins`,
    image: require(`./assets/img/_0046_Four-of-Coins.png`),
    meaning: `Conservation, greed.`
  },
  {
    id: `0047`,
    name: `Three of Coins`,
    image: require(`./assets/img/_0047_Three-of-Coins.png`),
    meaning: `Collaboration, conflict.`
  },
  {
    id: `0048`,
    name: `Two of Coins`,
    image: require(`./assets/img/_0048_Two-of-Coins.png`),
    meaning: `Decisiveness, organization.`
  },
  {
    id: `0049`,
    name: `Ace of Coins`,
    image: require(`./assets/img/_0049_Ace-of-Coins.png`),
    meaning: `Opportunity, prosperity.`
  },
  {
    id: `0050`,
    name: `King of Wands`,
    image: require(`./assets/img/_0050_King-of-Wands.png`),
    meaning: `Challenge, leadership.`
  },
  {
    id: `0051`,
    name: `Queen of Wands`,
    image: require(`./assets/img/_0051_Queen-of-Wands.png`),
    meaning: `Endurance, jealousy.`
  },
  {
    id: `0052`,
    name: `Knight of Wands`,
    image: require(`./assets/img/_0052_Knight-of-Wands.png`),
    meaning: `Adventure, fearlessness.`
  },
  {
    id: `0053`,
    name: `Page of Wands`,
    image: require(`./assets/img/_0053_Page-of-Wands.png`),
    meaning: `Exploration, procrastination.`
  },
  {
    id: `0054`,
    name: `Ten of Wands`,
    image: require(`./assets/img/_0054_Ten-of-Wands.png`),
    meaning: `Accomplishment, responsibility.`
  },
  {
    id: `0055`,
    name: `Nine of Wands`,
    image: require(`./assets/img/_0055_Nine-of-Wands.png`),
    meaning: `Endurance, resilience.`
  },
  {
    id: `0056`,
    name: `Eight of Wands`,
    image: require(`./assets/img/_0056_Eight-of-Wands.png`),
    meaning: `Decisiveness, motivation.`
  },
  {
    id: `0057`,
    name: `Seven of Wands`,
    image: require(`./assets/img/_0057_Seven-of-Wands.png`),
    meaning: `Defensiveness, ownership.`
  },
  {
    id: `0058`,
    name: `Six of Wands`,
    image: require(`./assets/img/_0058_Six-of-Wands.png`),
    meaning: `Pride, victory.`
  },
  {
    id: `0059`,
    name: `Five of Wands`,
    image: require(`./assets/img/_0059_Five-of-Wands.png`),
    meaning: `Conflict, rivalry.`
  },
  {
    id: `0060`,
    name: `Four of Wands`,
    image: require(`./assets/img/_0060_Four-of-Wands.png`),
    meaning: `Celebration, community.`
  },
  {
    id: `0061`,
    name: `Three of Wands`,
    image: require(`./assets/img/_0061_Three-of-Wands.png`),
    meaning: `Delay, obstruction.`
  },
  {
    id: `0062`,
    name: `Two of Wands`,
    image: require(`./assets/img/_0062_Two-of-Wands.png`),
    meaning: `Organization, planning.`
  },
  {
    id: `0063`,
    name: `Ace of Wands`,
    image: require(`./assets/img/_0063_Ace-of-Wands.png`),
    meaning: `Energy, productivity.`
  },
  {
    id: `0064`,
    name: `King of Swords`,
    image: require(`./assets/img/_0064_King-of-Swords.png`),
    meaning: `Discipline, education.`
  },
  {
    id: `0065`,
    name: `Queen of Swords`,
    image: require(`./assets/img/_0065_Queen-of-Swords.png`),
    meaning: `Complexity, clarity.`
  },
  {
    id: `0066`,
    name: `Knight of Swords`,
    image: require(`./assets/img/_0066_Knight-of-Swords.png`),
    meaning: `Anger, defensiveness.`
  },
  {
    id: `0067`,
    name: `Page of Swords`,
    image: require(`./assets/img/_0067_Page-of-Swords.png`),
    meaning: `Curiosity, energy.`
  },
  {
    id: `0068`,
    name: `Ten of Swords`,
    image: require(`./assets/img/_0068_Ten-of-Swords.png`),
    meaning: `Defeat, failure.`
  },
  {
    id: `0069`,
    name: `Nine of Swords`,
    image: require(`./assets/img/_0069_Nine-of-Swords.png`),
    meaning: `Despair, hope.`
  },
  {
    id: `0070`,
    name: `Eight of Swords`,
    image: require(`./assets/img/_0070_Eight-of-Swords.png`),
    meaning: `Entrapment, victimization.`
  },
  {
    id: `0071`,
    name: `Seven of Swords`,
    image: require(`./assets/img/_0071_Seven-of-Swords.png`),
    meaning: `Deception, strategy.`
  },
  {
    id: `0072`,
    name: `Six of Swords`,
    image: require(`./assets/img/_0072_Six-of-Swords.png`),
    meaning: `Acceptance, emotional control.`
  },
  {
    id: `0073`,
    name: `Five of Swords`,
    image: require(`./assets/img/_0073_Five-of-Swords.png`),
    meaning: `Knowledge, espionage.`
  },
  {
    id: `0074`,
    name: `Four of Swords`,
    image: require(`./assets/img/_0074_Four-of-Swords.png`),
    meaning: `Restoration, silence.`
  },
  {
    id: `0075`,
    name: `Three of Swords`,
    image: require(`./assets/img/_0075_Three-of-Swords.png`),
    meaning: `Forgiveness, suffering.`
  },
  {
    id: `0076`,
    name: `Two of Swords`,
    image: require(`./assets/img/_0076_Two-of-Swords.png`),
    meaning: `Confusion, indecision.`
  },
  {
    id: `0077`,
    name: `Ace of Swords`,
    image: require(`./assets/img/_0077_Ace-of-Swords.png`),
    meaning: `Chaos, insight.`
  }
];

const cardError = { id: `-1`, name: `Card not found`, image: null };
const getCardByName = name => cards.filter(c => c.name === name)[0] || cardError;

export { cards, getCardByName }
