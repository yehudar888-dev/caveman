const flows = {

  anger: {
    root: {
      titles: ["yo, what set it off?", "where's this anger coming from?"],
      bodies: ["anger always has a source. something hit a nerve.", "it doesn't show up for nothing. let's find what got to you."],
      choiceSets: [
        ["someone let me down", "i feel disrespected", "things keep blocking me", "i honestly don't know"],
        ["i was betrayed or let down", "my worth got dismissed", "life keeps fighting me", "no idea — it's just sitting there"]
      ]
    },
    l1: [
      { titles: ["who let you down?", "who dropped the ball?"],
        bodies: ["betrayal hits different from regular anger. it comes with grief underneath.", "counted on someone, they failed you. that cuts in a specific way."],
        choiceSets: [["someone i really trusted", "someone who should've known better", "it keeps happening with them"], ["a close person failed me", "basic decency and they missed it", "same pattern, again"]] },
      { titles: ["how'd they disrespect you?", "what did they do exactly?"],
        bodies: ["your anger here is literally your self-respect doing its job.", "disrespect fires something primal. because it should. your dignity isn't up for debate."],
        choiceSets: [["talked over or flat-out ignored", "my effort got dismissed", "they were openly rude to me"], ["made to feel invisible", "what i did was brushed off", "straight up disrespectful to my face"]] },
      { titles: ["what keeps getting blocked?", "where's the resistance?"],
        bodies: ["when effort doesn't produce results, anger fills that gap. makes complete sense.", "being blocked repeatedly compounds fast. your frustration has been stacking."],
        choiceSets: [["something i've been working toward", "a situation outside my control", "honestly everything at once"], ["my goals keep hitting walls", "circumstances won't cooperate", "it's been one thing after another"]] },
      { titles: ["how's it showing up in you?", "where do you feel it?"],
        bodies: ["unnamed anger is usually accumulated stress finding an exit. nothing wrong with that.", "not knowing why doesn't make it less real. something's been building."],
        choiceSets: [["irritable at everything", "physical tension in my body", "i'm close to snapping"], ["small things are setting me off", "tight, restless, running hot", "short fuse and i know it"]] }
    ],
    l2: [
      [
        { titles: ["someone you actually trusted", "you let them in and they failed"],
          bodies: ["that's not just anger — it's anger plus grief. both are real.", "trust broken by someone you genuinely chose is a specific kind of wound."],
          choiceSets: [["they knew what was at stake", "i don't think they realized how much", "doesn't matter — they still failed"], ["fully aware and let me down anyway", "they just didn't get the weight of it", "no excuse regardless of the reason"]] },
        { titles: ["the bar was basic and they missed it", "they should've known better"],
          bodies: ["you didn't expect much — just basic reliability. that's not a high bar.", "some expectations aren't demanding — they're just human. missing them says something."],
          choiceSets: [["i expected basic decency, not miracles", "i gave too many second chances", "they showed me who they are"], ["a reasonable expectation, not a big ask", "i was patient way too long", "their actions made it pretty clear"]] },
        { titles: ["not the first time", "this keeps repeating"],
          bodies: ["patterns don't lie. recurring betrayal hits different — the anger comes with exhaustion.", "having to deal with the same thing again is demoralizing on top of everything else."],
          choiceSets: [["i keep forgiving and they keep doing it", "i stayed too long hoping it'd change", "something needs to change now"], ["the cycle just keeps going", "i was patient but it's wearing thin", "i need to decide what to do about it"]] }
      ],
      [
        { titles: ["being talked over or ignored", "made to feel like you're not there"],
          bodies: ["being talked over signals 'your voice doesn't count here'. your brain responds to that correctly.", "consistently being ignored in conversation chips away at you. it's not a small thing."],
          choiceSets: [["it happened in front of others", "just one-on-one but they still do it", "it's a pattern with this person"], ["public dismissal, embarrassing", "private but completely consistent", "happens all the time with them"]] },
        { titles: ["your effort got written off", "what you did wasn't seen"],
          bodies: ["putting real work in and having it dismissed is a form of erasure. your anger is your pride showing up.", "your contribution was invisible to them. the anger is appropriate."],
          choiceSets: [["put in real work and it went unnoticed", "someone else got credit or i got none", "they acted like it didn't matter"], ["my effort was completely ignored", "credit went somewhere else", "treated what i did as irrelevant"]] },
        { titles: ["they were flat-out rude", "straight up disrespectful"],
          bodies: ["no ambiguity here — they were rude. your anger is a clean response to a clear offense.", "openly disrespectful = your system saying 'that's not okay'. and it's right."],
          choiceSets: [["in front of other people", "directly to me, privately", "it's how they generally talk to me"], ["public and embarrassing", "personal and direct", "their whole tone toward me lately"]] }
      ],
      [
        { titles: ["something you've been grinding for", "your goal keeps hitting walls"],
          bodies: ["working hard at something that won't move — the friction turns into anger. makes sense.", "the effort you're putting in deserves results. anger fills the gap when it doesn't get them."],
          choiceSets: [["putting in work and not seeing it pay off", "outside obstacles keep appearing", "starting to question if it's worth it"], ["effort without results", "blocked by things i can't control", "questioning whether to keep going"]] },
        { titles: ["it's out of your hands", "you can't control the situation"],
          bodies: ["anger at things you can't control is one of the most human experiences. the helplessness feeds it.", "when the block can't be moved or argued with, the anger has nowhere to land."],
          choiceSets: [["i can't change the situation at all", "i've tried everything and it's still there", "feeling completely powerless about it"], ["nothing i do actually changes it", "i've exhausted what i can do", "out of control and it's eating at me"]] },
        { titles: ["everything at once", "it's been a domino effect"],
          bodies: ["multiple sources of friction compounding at once — you're not overreacting. it really has been stacking.", "when nothing cooperates, the anger is the only honest response."],
          choiceSets: [["work, life, and relationships all at once", "started with one thing and spread", "too many sources to even name"], ["multiple areas hitting hard right now", "cascaded from one original problem", "it's everywhere and i'm drained"]] }
      ],
      [
        { titles: ["everything's setting you off", "on edge and not sure why"],
          bodies: ["when small things trigger outsized anger, that's accumulated stress hitting capacity.", "heightened irritability means your system is maxed out. small things are just the last straw."],
          choiceSets: [["little things feel unbearable rn", "i snapped at someone who didn't deserve it", "i know it's disproportionate but can't stop"], ["normal things are setting me off", "reacted too big to something small", "it's not logical but i can't help it"]] },
        { titles: ["it's in your body", "physical before it's even mental"],
          bodies: ["anger often lives in the body before the mind names it. tension, heat, restlessness — that's stored anger.", "when you feel it physically first, your nervous system is processing before your brain catches up."],
          choiceSets: [["tension in my chest or jaw", "restless energy with nowhere to go", "running hot, keyed up, can't settle"], ["tight in my body physically", "need to move but don't know why", "like a pressure building up inside"]] },
        { titles: ["close to snapping", "running on a short fuse"],
          bodies: ["being near the edge means something's been building without release. it didn't happen overnight.", "feeling close to losing it = your threshold has been consistently pushed. this has been accumulating."],
          choiceSets: [["holding it together but barely", "already snapped at someone today", "scared of what i might say or do"], ["white-knuckling it rn", "already let it out on someone", "don't fully trust myself right now"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need from this?", "what would actually help right now?"],
        bodies: ["you were let down by someone you trusted. let's make sure something useful lands before you go.", "betrayal-based anger needs somewhere to go. what matters most to you right now?"],
        choiceSets: [["just know this anger is valid", "help figuring out what to do next", "how to protect myself going forward"], ["validation i'm not overreacting", "actual steps i can take", "how to not let this happen again"]] },
      { titles: ["what matters most right now?", "what do you actually need?"],
        bodies: ["your self-respect took a hit and your anger showed up for you. what's most useful here?", "disrespect-based anger wants resolution. what flavor of that fits?"],
        choiceSets: [["confirm this was genuinely not okay", "how to handle it with this person", "how to feel less rattled by it"], ["validation i wasn't overreacting", "a plan for addressing it", "how to shake it off and move on"]] },
      { titles: ["what's your gut saying?", "where's your head at?"],
        bodies: ["you've been fighting friction and the anger makes sense. what's most useful to take away?", "when things keep blocking you, knowing what you need is half the battle."],
        choiceSets: [["help reframing the situation", "knowing when to push vs. let go", "just to feel heard about it"], ["a different angle on it", "help finding my limit", "i just want acknowledgment"]] },
      { titles: ["let's sit here a sec", "one more thing before we land"],
        bodies: ["unnamed anger is usually pointing somewhere. let's get one more layer before we're done.", "the anger without a clear source is hiding something. what fits?"],
        choiceSets: [["something deeper is probably going on", "i need to get it out of my body", "i want to understand where it's from"], ["this is about more than one thing", "i need physical release more than mental", "i need to understand the root"]] }
    ],
    finals: [
      { titles: ["you were let down by someone you counted on", "that trust got broken"],
        bodies: ["and that hurts in a specific way — it's anger AND grief mixed. both are real and both are allowed. you don't have to resolve it right now. you just have to feel it without letting it burn you.", "betrayal anger comes with grief underneath it. you lost something — trust, maybe the image of who you thought they were. give yourself permission to feel both without rushing to forgive or fix anything."],
        tips: ["give yourself 24 hours before deciding how to respond — angry reactions rarely land how you want", "you don't owe immediate forgiveness. feel it first, then decide what you actually want", "write a message you won't send. get it all out. then decide what you actually want them to know", "ask yourself what you'd tell a friend in this exact situation — then take that advice yourself"] },
      { titles: ["your anger is your self-respect doing its job", "that wasn't okay and you know it"],
        bodies: ["the anger you felt was your system saying 'i deserve better than that'. and it's right. the question isn't whether it's valid — it is. the question is what you do with it.", "disrespect fires something primal because it should. your dignity has limits, and someone crossed them. now you get to decide how to hold those limits going forward."],
        tips: ["if it's safe, address it directly once — calmly, clearly, naming what happened and what you need differently", "if this is a pattern, your anger is telling you something about whether this relationship serves you", "journal what specifically was disrespectful. naming it stops it living rent-free in your head", "notice if you're minimizing it. 'it wasn't that bad' is how you betray your own self-respect"] },
      { titles: ["your anger is your drive trying to push through", "frustration is fuel — point it right"],
        bodies: ["when effort doesn't produce results, anger fills the gap. that's natural. the energy is real — it just needs a direction.", "you've been pushing against resistance and your system is hitting a limit. that's useful information, not failure."],
        tips: ["separate what you can control from what you can't — then only spend energy on the first pile", "when effort isn't working, sometimes the move is to change the angle, not push harder", "give yourself permission to be angry about it for a day. then decide your next move from a calmer place", "sometimes blocked means 'not yet', not 'never'. zoom out and check if that could be true here"] },
      { titles: ["unnamed anger is usually accumulated stress", "your tank has been filling for a while"],
        bodies: ["not knowing exactly why you're angry usually means it's not one thing — it's been building. your system is signaling overload and the anger is the alarm going off.", "undirected anger is emotional overflow. when you're at capacity, everything starts feeling like a threat. the anger is real — it just doesn't have a single address."],
        tips: ["physical movement helps more than thinking when anger has no clear source — walk, run, move your body", "ask yourself: what have i been tolerating without acknowledging? that's usually where unnamed anger comes from", "reduce input for a bit — less noise, less stimulation. let your nervous system breathe", "unnamed anger is often a backlog. consider what you've been letting slide without addressing"] }
    ]
  },

  anxiety: {
    root: {
      titles: ["what's got your brain spinning?", "where's the anxiety sitting?"],
      bodies: ["anxiety's always about something — even when it doesn't feel like it.", "your nervous system is in overdrive for a reason. let's narrow it down."],
      choiceSets: [
        ["worried about the future", "scared of what people think", "there's a specific thing stressing me", "it's just always kind of there"],
        ["future what-ifs are eating me", "judgment or rejection from others", "one concrete thing i can name", "background anxiety, no clear cause"]
      ]
    },
    l1: [
      { titles: ["what kind of future worry?", "what's the what-if?"],
        bodies: ["future anxiety is your brain trying to prepare for every possible bad outcome. exhausting, but it means something.", "when the mind runs ahead to worst cases, it's trying to protect you. problem is it can't tell the difference between likely and possible."],
        choiceSets: [["things going catastrophically wrong", "not being ready for what's coming", "losing something good i already have"], ["catastrophe scenarios my brain keeps running", "not being prepared enough", "fear of losing what i've got"]] },
      { titles: ["what is it about people?", "who are you worried about?"],
        bodies: ["social anxiety is your brain running threat detection on human relationships. it's trying to keep you safe — just turned up too high.", "fear of judgment means you care. the problem isn't that you care — it's that the alarm won't turn off."],
        choiceSets: [["being judged or rejected", "saying the wrong thing", "disappointing someone i care about"], ["people thinking less of me", "putting my foot in it", "letting someone down"]] },
      { titles: ["what specifically?", "can you name what it is?"],
        bodies: ["having a specific source is actually useful — it means the anxiety has an address. that's easier to work with.", "one concrete thing you can name is cleaner than background noise. let's get more specific."],
        choiceSets: [["a deadline or upcoming event", "a conversation i need to have", "a decision i need to make"], ["something with a clear date on it", "talking to someone about something hard", "choosing between things and getting it wrong"]] },
      { titles: ["how long has it been like this?", "when did it start?"],
        bodies: ["background anxiety is your nervous system stuck in alert mode. it's not one thing — it's the baseline.", "when anxiety is always kind of there, that usually means your system hasn't had a real break in a while."],
        choiceSets: [["i'm basically always a little anxious", "it's gotten worse recently", "it comes and goes in waves"], ["anxiety is just my default state", "something recently turned it up", "it cycles and i don't know why"]] }
    ],
    l2: [
      [
        { titles: ["catastrophe scenarios", "worst-case brain"],
          bodies: ["catastrophizing is your brain trying to pre-solve problems that haven't happened. it's protective — just not helpful.", "the mind runs worst-case to feel ready. problem is, it treats 'possible' as 'probable'."],
          choiceSets: [["i keep playing out the worst version", "i can't stop even when i know it's unlikely", "it feels more likely than it probably is"], ["my brain loops the bad version constantly", "logic doesn't help turn it off", "the feeling is bigger than the actual risk"]] },
        { titles: ["not feeling prepared", "scared of being caught off guard"],
          bodies: ["not-ready anxiety is about needing control before you can feel safe. the gap between where you are and where you think you need to be feels huge.", "preparation anxiety means you're setting a standard for 'ready' that keeps moving. it's hard to meet a bar that shifts."],
          choiceSets: [["i never feel like i've done enough", "the goal posts keep moving", "i'm scared of being exposed as unprepared"], ["no amount of prep feels like enough", "i prep and then doubt the prep", "fear of being caught out"]] },
        { titles: ["scared of losing what's good", "fear of it all falling apart"],
          bodies: ["when life is actually okay, sometimes anxiety finds a new job: protecting what you have. the fear of loss can be bigger than the original stress.", "anxious about good things ending is surprisingly common. when you finally have something worth keeping, the fear of losing it kicks in."],
          choiceSets: [["things are actually okay but i'm waiting for it to go wrong", "i'm scared to enjoy it because it might end", "i hold good things loosely because i expect to lose them"], ["scared to get comfortable because it might change", "enjoying things feels risky", "always half-expecting the other shoe to drop"]] }
      ],
      [
        { titles: ["being judged or rejected", "fear of what people think"],
          bodies: ["judgment anxiety means you're running a constant background check: how am i coming across? it's exhausting because it never fully turns off.", "the fear of rejection is just your brain protecting you from being cast out. it made sense evolutionarily. it's just turned up too high now."],
          choiceSets: [["i replay conversations wondering how i came across", "i change myself depending on who i'm around", "the fear of rejection stops me from trying things"], ["i overanalyze how i land with people", "i code-switch to avoid being judged", "i don't try things because rejection would crush me"]] },
        { titles: ["scared of saying the wrong thing", "social situations feel like a minefield"],
          bodies: ["hyperawareness in conversation is your brain scanning for mistakes in real time. it makes being present really hard.", "when you're monitoring what you say while also saying it, you're running two processes at once. no wonder it's tiring."],
          choiceSets: [["i overthink everything before i say it", "i get anxious mid-conversation", "i replay things after and cringe"], ["too much editing before i speak", "anxiety spikes while i'm in the conversation", "i go over it afterward and beat myself up"]] },
        { titles: ["scared of letting someone down", "not wanting to disappoint"],
          bodies: ["disappointment anxiety is about other people's feelings being tied to your sense of safety. if they're unhappy, something feels wrong with you.", "fear of disappointing someone you care about can run really deep. it often goes back further than the current relationship."],
          choiceSets: [["i'd rather say yes and overextend than disappoint", "their unhappiness makes me feel responsible", "i've let someone down before and it stuck with me"], ["i over-commit to avoid letting people down", "their disappointment feels like my failure", "past disappointment is still living in my head"]] }
      ],
      [
        { titles: ["a deadline or event coming up", "something with a date on it"],
          bodies: ["countdown anxiety is real — the closer it gets the louder it gets. that's your brain trying to prime you for action.", "when there's a specific date attached, anxiety has an expiry. that's actually useful — this isn't forever."],
          choiceSets: [["it's soon and i feel totally unprepared", "i've been avoiding thinking about it", "i've prepared but still feel awful about it"], ["time is running out and i'm not ready", "avoiding it because it feels too big", "prepared but the anxiety didn't care"]] },
        { titles: ["a conversation you're dreading", "something you need to say but haven't"],
          bodies: ["pre-conversation anxiety is often worse than the conversation itself. the anticipation is doing a lot more work than the actual event will.", "your brain is rehearsing every way this could go wrong. that's exhausting and not actually helpful prep."],
          choiceSets: [["i keep putting it off because i dread it", "i've scripted it in my head a hundred times", "i'm scared of their reaction"], ["avoiding it is easier but making it worse", "i've over-prepared and still feel unprepared", "their reaction is what i can't predict"]] },
        { titles: ["a decision you're stuck on", "can't pick and it's eating at you"],
          bodies: ["decision anxiety often isn't about the choice itself — it's about the fear of making the 'wrong' one and having to live with it.", "getting stuck in a decision usually means both options carry some fear. it's not actually about which is better."],
          choiceSets: [["both options feel risky", "i'm scared of regret either way", "i keep going back and forth and can't land"], ["every option has a downside i'm fixating on", "regret feels like the worst outcome", "flip-flopping and exhausting myself"]] }
      ],
      [
        { titles: ["anxiety as your default", "always just a bit on edge"],
          bodies: ["when anxiety is the baseline, it doesn't feel like anxiety anymore — it just feels like normal. that's how you know it's been there too long.", "background anxiety as default mode usually means your nervous system hasn't had a real reset in a while."],
          choiceSets: [["i don't even notice it most of the time", "it's only obvious when it spikes", "i think i've just accepted this as who i am"], ["it's become my background noise", "only notice it when it gets loud", "might have normalized something that's not normal"]] },
        { titles: ["it's gotten worse lately", "something turned up the volume"],
          bodies: ["a recent increase in anxiety usually means something has changed — even if you can't name exactly what. the body registers it before the brain catches up.", "when it gets worse without a clear reason, it's usually a combination of things your system has been quietly processing."],
          choiceSets: [["something changed but i can't fully name it", "life just has more to handle lately", "i think stress from one area is bleeding into everything"], ["something shifted that i haven't fully processed", "more demands than usual across the board", "it's spilling over from one main thing"]] },
        { titles: ["it comes in waves", "some days fine, some days not"],
          bodies: ["cyclical anxiety is often tied to specific triggers, even when they're not obvious. the pattern is meaningful.", "anxiety that comes and goes usually has something driving the waves — it's just not always clear what."],
          choiceSets: [["i never know when it'll hit", "certain situations or times of day trigger it", "it peaks and then fades but always comes back"], ["feels random and unpredictable", "there might be a pattern i haven't figured out", "it cycles but i can't predict it"]] }
      ]
    ],
    l3: [
      { titles: ["what would actually help right now?", "what do you need from this?"],
        bodies: ["future anxiety can spiral if you don't give it something concrete. what fits best?", "your brain has been running worst-case. what would bring it down a notch?"],
        choiceSets: [["just to know this level of worry makes sense", "tools to calm the spiral", "perspective on what's actually likely"], ["validation that this is a real thing", "something practical to try", "help seeing it more realistically"]] },
      { titles: ["what do you need most?", "what would help right now?"],
        bodies: ["social anxiety is exhausting. what would be most useful to take from this?", "you've been running people-threat-detection on high. what fits?"],
        choiceSets: [["just to feel less alone in this", "ways to turn down the social alarm", "help caring less about what others think"], ["validation this is real and common", "something that actually helps in the moment", "a perspective shift on other people's opinions"]] },
      { titles: ["what would help most?", "what do you need right now?"],
        bodies: ["you named a specific thing — that's actually useful. what would help most with it?", "having a concrete source is good. what's the best move from here?"],
        choiceSets: [["just to feel less alone with this one thing", "how to stop avoiding it", "practical steps for actually dealing with it"], ["validation the anxiety makes sense", "how to stop putting it off", "concrete action i can take"]] },
      { titles: ["what would help most?", "what do you need from this?"],
        bodies: ["background anxiety that's always there needs a different approach than situational anxiety. what fits?", "if anxiety is your baseline, what would move the needle most?"],
        choiceSets: [["understanding why i'm wired this way", "ways to turn down the baseline", "just feeling like it's not my fault"], ["why my nervous system is like this", "practical ways to reduce the background noise", "permission to not be okay with this being normal"]] }
    ],
    finals: [
      { titles: ["your brain is trying to protect you", "future anxiety is misdirected care"],
        bodies: ["future anxiety is your mind trying to prepare for every bad thing so nothing catches you off guard. the problem is it can't distinguish between 'possible' and 'likely' — so it treats every worst case as equally real. it's not rational, but it's not random either. it's protection that's turned up too high.", "your brain runs the future scenarios because it's trying to keep you safe. that impulse is actually coming from a good place. the goal isn't to stop caring about the future — it's to get your brain to stop treating unlikely outcomes as certainties."],
        tips: ["when anxiety about the future spikes, ask: what's the actual probability of this? not just 'could it happen' but 'how likely is it really'", "write the worst case down. then write what you'd do if it actually happened. your brain calms when it has a plan, even for the bad version", "limit how long you let yourself worry — 10 minutes of dedicated worrying, then move. it sounds weird but it helps contain it", "notice if you're protecting against a fear that already came true before. sometimes anxiety is about the past, not the future"] },
      { titles: ["your brain is running threat detection on people", "social anxiety is just protection on overdrive"],
        bodies: ["social anxiety means your brain has labeled other people's judgments as dangerous. that's not irrational — social rejection used to have real consequences. the problem is your alarm system can't tell 2024 from 10,000 years ago. it fires the same way whether you're being excluded from a tribe or a group chat.", "the fear of being judged is the fear of being cast out. evolutionarily, that made sense. now it just makes being in a room feel like a job interview. the goal isn't to stop caring what people think — it's to stop treating their opinions as threats."],
        tips: ["people are thinking about you way less than you think. everyone's mostly worried about their own performance", "try acting 10% more confident than you feel — behavior changes feelings more than the reverse", "notice which people actually matter to you. narrow the list of whose judgment counts and start there", "exposure is the only thing that actually works for social anxiety — small, repeated doses of the thing that scares you"] },
      { titles: ["you've named the thing — that's already something", "specific anxiety is workable anxiety"],
        bodies: ["having a concrete source is genuinely useful. vague anxiety is harder to work with than a specific thing you can name and think about clearly. the anxiety is real, but it has an address now — which means it can be dealt with.", "specific anxiety is almost always about one of two things: uncertainty (you don't know how it'll go) or avoidance (you've been putting it off and the dread is building). either way, knowing the thing is the first step to doing something about it."],
        tips: ["break the specific thing into the smallest possible next action. not 'deal with it' — just the first tiny step", "if you're avoiding it, the avoidance is making it bigger. even a small move toward it reduces anxiety faster than waiting", "set a time limit on how long you'll stress about it before taking action. a deadline for deciding helps more than open-ended worry", "ask: what's the actual worst realistic outcome? then ask: could i handle that? usually yes. that helps."] },
      { titles: ["your nervous system is stuck in alert mode", "background anxiety means you haven't had a real break"],
        bodies: ["when anxiety is the baseline, it doesn't feel like anxiety anymore — it just feels like you. that's how you know it's been there too long. your nervous system has normalized a state of low-level threat. it's not who you are — it's a setting that got stuck.", "background anxiety is your body running emergency mode as a default. it was probably useful at some point — maybe it kept you sharp or safe. but a body that can't come down from alert mode is burning extra fuel constantly. you're allowed to look for the off switch."],
        tips: ["baseline anxiety often comes down fastest with the body, not the mind — try breathwork, cold water, or vigorous movement", "notice if you're taking in a lot of news, social media, or high-intensity content. anxiety is partly an input problem", "if it's truly always there, it might be worth talking to someone — this is the kind of thing therapy actually helps with specifically", "small wins matter: even 20 minutes of actual calm in a day is worth noting and building on"] }
    ]
  },

  sadness: {
    root: {
      titles: ["what's making you sad, bro?", "where's the sadness coming from?"],
      bodies: ["sadness means something mattered. let's figure out what.", "it's trying to tell you something. let's listen."],
      choiceSets: [
        ["i lost someone or something", "i feel behind in life", "i feel disconnected from people", "i don't really know why"],
        ["something or someone is gone", "life feels like it's moving without me", "i feel cut off from everyone", "it's just there with no clear reason"]
      ]
    },
    l1: [
      { titles: ["what kind of loss?", "what did you lose?"],
        bodies: ["loss is loss. doesn't matter if it fits someone else's definition of 'a big deal'. if it mattered to you, it counts.", "grief comes in a lot of forms. the sadness is just love with nowhere to go right now."],
        choiceSets: [["a person i love or loved", "something i cared about deeply", "a version of my life i had or imagined"], ["someone who mattered to me", "something that was part of who i was", "a future i was counting on"]] },
      { titles: ["behind in what exactly?", "what does 'behind' look like for you?"],
        bodies: ["feeling behind is comparing your internal timeline to an external one nobody agreed to. it still hurts, though.", "the 'behind' feeling is real even when the timeline is made up. let's get specific about it."],
        choiceSets: [["career or school milestones", "life stuff like relationships or independence", "compared to people i know my age"], ["professionally or academically", "relationship, living situation, life stage", "literally just everyone around me seems further along"]] },
      { titles: ["disconnected from who?", "cut off from what?"],
        bodies: ["disconnection sadness is quieter than most sadness — it sits underneath everything without being loud about it.", "feeling cut off from people or from yourself is a particular kind of loneliness. let's find where it is."],
        choiceSets: [["people in my life, even ones i'm around", "who i used to be", "any sense of meaning or purpose"], ["people around me feel distant", "i don't recognize myself lately", "nothing feels meaningful right now"]] },
      { titles: ["how long has it been there?", "when did it start?"],
        bodies: ["unexplained sadness is real sadness. you don't need a clear reason for it to count.", "when there's no obvious cause, the sadness is still valid — it just takes a bit more work to understand."],
        choiceSets: [["just today or this week", "it's been weeks or months", "it comes and goes in waves"], ["recently, kind of out of nowhere", "it's been hanging around for a while", "it cycles — better and worse periods"]] }
    ],
    l2: [
      [
        { titles: ["losing a person", "someone's gone"],
          bodies: ["grief from losing a person is its own thing. there's no correct way through it — just through.", "the loss of a person leaves a specific absence. everything around them still exists; they just don't."],
          choiceSets: [["they died", "the relationship ended", "they're still here but it's different now"], ["i'm grieving a death", "a relationship that mattered ended", "someone is still in my life but something changed"]] },
        { titles: ["losing something you cared about", "something that was part of you"],
          bodies: ["losing something significant — a job, a dream, a time in your life — is real grief. it doesn't need a body to be loss.", "when something that was part of your identity is gone, you grieve who you were with it too."],
          choiceSets: [["something i worked really hard for", "a dream or goal i had to let go of", "a part of my life that's over now"], ["something i invested a lot in", "a future i planned that isn't happening", "a chapter that closed"]] },
        { titles: ["a version of your life", "a future you were counting on"],
          bodies: ["grieving a life you thought you'd have is valid. the loss of an imagined future is still loss.", "when a version of how things were 'supposed to go' doesn't happen, the grief can catch you off guard."],
          choiceSets: [["things went differently than i planned", "i had to give up a life i wanted", "i'm mourning who i thought i'd be by now"], ["my life took an unexpected direction", "something i was working toward didn't happen", "i'm not who or where i expected to be"]] }
      ],
      [
        { titles: ["career or school", "professional or academic milestones"],
          bodies: ["career-behind sadness is about feeling like you should be further. it often comes with shame mixed in.", "academic and career comparisons hit hard because they feel 'objective' — like there's a scoreboard. there isn't."],
          choiceSets: [["i should be further in my career by now", "i'm still in school when i thought i'd be done", "i feel like i've wasted time"], ["others seem further along professionally", "still in the education phase i thought i'd be past", "lost time i can't get back"]] },
        { titles: ["life milestones", "relationship or independence stuff"],
          bodies: ["relationship and life-stage comparisons feel particularly personal because they touch identity — who you are, not just what you've done.", "when it feels like everyone else is hitting certain milestones, the sadness is about more than just the milestone."],
          choiceSets: [["relationship status or family stuff", "living situation or independence", "feeling like everyone is moving on but me"], ["romantic or family milestones", "where i live and how i live", "watching others advance while i feel stuck"]] },
        { titles: ["compared to people you know", "the comparison spiral"],
          bodies: ["comparison sadness is sneaky. it feels like it's about them being further along, but it's really about feeling unseen for where you are.", "comparing yourself to people your age feels natural but it skips over the fact that everyone's timeline is genuinely different."],
          choiceSets: [["friends seem like they have it more figured out", "social media makes it worse", "even people i don't care about make me feel behind"], ["people i know are doing 'better'", "seeing it online amplifies it", "i notice it even with people whose life i don't actually want"]] }
      ],
      [
        { titles: ["people feel far away", "disconnected from others"],
          bodies: ["feeling disconnected from people even when you're around them is one of the lonelier feelings. the distance isn't physical.", "you can be surrounded by people and still feel completely alone. that gap is real even if it's invisible."],
          choiceSets: [["i feel alone even in a room full of people", "conversations feel surface-level and hollow", "i've drifted from people who used to be close"], ["surrounded but still alone", "everything feels shallow lately", "distance grew between me and people i cared about"]] },
        { titles: ["disconnected from yourself", "you don't recognize yourself"],
          bodies: ["losing the thread of who you are is disorienting in a way that's hard to explain to anyone who hasn't felt it.", "when you don't recognize yourself — your reactions, your interests, your energy — that's a specific kind of loss."],
          choiceSets: [["i've changed in ways i don't like", "i don't know what i want anymore", "i feel like a different person than i used to be"], ["i'm not who i used to be in a bad way", "my sense of what i want or care about is gone", "something shifted and i miss who i was"]] },
        { titles: ["nothing feels meaningful", "disconnected from purpose"],
          bodies: ["when nothing feels meaningful, it's not that you've stopped caring — it's that something that used to carry meaning has gone quiet.", "purposelessness feels like floating. things happen but nothing lands. that's not laziness — it's disconnection."],
          choiceSets: [["things i used to love don't do it for me", "i go through the motions but feel nothing", "i don't know what i'm working toward anymore"], ["passions feel flat now", "i'm functional but numb to it", "lost my sense of direction or purpose"]] }
      ],
      [
        { titles: ["just today", "hit you recently"],
          bodies: ["sometimes sadness shows up without announcing itself. today counts even if yesterday was fine.", "a day of sadness without a reason is still a real day. you don't need to trace it to something."],
          choiceSets: [["it came out of nowhere today", "something small triggered it and it hit hard", "i woke up feeling it"], ["totally unexpected today", "a small thing opened something bigger", "just woke up in it"]] },
        { titles: ["been there for a while", "it's been hanging around"],
          bodies: ["when sadness stays, it becomes part of the background. you stop noticing it as 'sad' and start calling it 'tired' or 'unmotivated'.", "long-running low-grade sadness doesn't feel dramatic — it just feels like life on a dimmer switch."],
          choiceSets: [["weeks or months of this", "i've kind of gotten used to it", "it's become my default"], ["it's been around a long time", "normalized it but it's still there", "this is just my baseline now"]] },
        { titles: ["it comes in waves", "cycles of it"],
          bodies: ["sadness that comes in waves is often tied to patterns — even when they're not obvious. triggers you haven't noticed yet.", "cyclical sadness is meaningful. when it returns, it's usually pointing at something consistent."],
          choiceSets: [["good stretches then it returns", "certain times or situations bring it back", "i never know when it'll come"], ["cycles between better and worse", "specific patterns trigger it", "it's unpredictable and that's its own stress"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need right now?", "what would help most?"],
        bodies: ["you've been carrying a loss. what would be most useful before you go?", "grief needs somewhere to land. what fits for you right now?"],
        choiceSets: [["just to know this sadness is valid", "how to carry it without it crushing me", "when it might start to ease up"], ["validation that what i feel makes sense", "ways to hold it without being held down by it", "some hope about when it gets easier"]] },
      { titles: ["what would help most?", "what do you need from this?"],
        bodies: ["feeling behind is painful even when the timeline isn't real. what fits for where you are?", "comparison sadness needs a specific kind of response. what matters most to you right now?"],
        choiceSets: [["just permission to be where i am", "how to stop comparing", "help seeing my actual progress"], ["permission to be at my own pace", "ways to get out of the comparison spiral", "acknowledging what i have done"]] },
      { titles: ["what would help most?", "what do you need right now?"],
        bodies: ["disconnection sadness is quiet but heavy. what would be most useful?", "you're cut off from something — people, yourself, meaning. what fits?"],
        choiceSets: [["just to feel less invisible", "how to rebuild connection", "how to reconnect with who i am"], ["someone to acknowledge i'm here", "practical ways to close the distance", "how to find myself again"]] },
      { titles: ["what do you need right now?", "what fits best?"],
        bodies: ["sadness without a clear cause still deserves care. what would help most?", "even without a reason, the sadness is real. what would be most useful?"],
        choiceSets: [["just to be heard without needing to explain", "help understanding where it might be coming from", "how to feel better even without answers"], ["permission to feel it without justifying it", "a possible explanation", "something practical to do with it"]] }
    ],
    finals: [
      { titles: ["grief is love with nowhere to go", "you're allowed to hurt from this"],
        bodies: ["whatever you lost — a person, a relationship, a version of your life — the sadness is proportional to how much it mattered. that's not weakness. that's the cost of caring. you don't have to get over it on anyone else's timeline.", "loss doesn't follow a schedule and there's no correct way to grieve. what matters is that you don't try to push through it without letting yourself feel it. the sadness is doing something — it's processing the gap between what was and what is."],
        tips: ["let yourself be sad without immediately trying to fix it or find the lesson. sometimes you just need to feel it", "reach out to someone who knew what you lost — shared grief is lighter than private grief", "grief often comes in waves, not stages. a good day doesn't mean you're over it and a bad day doesn't mean you're going backward", "take care of basics — sleep, food, movement. grief is physical too and the body needs support while it processes"] },
      { titles: ["you're moving at your own pace, not a made-up one", "the timeline you're comparing to isn't real"],
        bodies: ["the timeline everyone seems to be on — career by this age, relationship by that age, figured out by now — isn't actually a thing anyone agreed to. it's assembled from other people's highlights and social pressure. your actual life doesn't fit that template, and neither does anyone else's honestly.", "feeling behind is painful but it's based on a comparison to something that doesn't really exist. what's real is where you are and what you're actually building. that doesn't invalidate the pain — but it does mean the judge and jury you've been imagining aren't real."],
        tips: ["list three things you've done or survived that your younger self would be impressed by. seriously, do it", "mute or unfollow accounts or people that consistently make you feel behind. that's not defeat — it's clarity", "ask what 'on track' would actually look like to you without anyone else's input. the answer is usually different from what you've been measuring", "compare your today to your last year, not to someone else's today"] },
      { titles: ["disconnection is real even when it's invisible", "the gap you're feeling is a signal, not a flaw"],
        bodies: ["feeling disconnected — from people, from yourself, from meaning — isn't a personal failing. it's a signal that something has drifted that needs attention. relationships drift. identities shift. meaning comes and goes. none of that means something is permanently wrong with you.", "disconnection often builds slowly — you don't notice it until the gap is already there. but gaps close. connection can be rebuilt. the fact that you can feel the absence means you still know what you want."],
        tips: ["reach out to one person you've drifted from. one message. lower the bar for what counts as connection", "reconnecting with yourself often starts with the body — something physical that you used to like, before everything got heavy", "if nothing feels meaningful, start stupidly small. one thing today that's even slightly interesting to you", "journaling about who you were before you felt disconnected can help you find the thread back"] },
      { titles: ["your sadness doesn't need a reason to be valid", "unnamed sadness is still real sadness"],
        bodies: ["you don't need to justify feeling sad. you don't need to trace it back to something big enough that someone else would agree counts. the sadness is there. that's enough for it to deserve care.", "sometimes sadness doesn't have a single cause — it's the accumulation of small things, the weather of a life that's been a lot lately, the body processing something the mind hasn't fully caught up to. all of that is real."],
        tips: ["don't force an explanation. sometimes the kindest thing is to sit with it without needing to understand it right now", "basic care goes far: sleep, food, water, even a short walk. the body and mood are more connected than it feels", "let someone in even without an explanation. 'i'm having a sad day for no clear reason' is a valid thing to say", "if this is a regular thing, it might be worth talking to someone — not because something is wrong with you, but because you deserve support"] }
    ]
  },

  loneliness: {
    root: {
      titles: ["what kind of lonely are you feeling?", "where's the loneliness sitting?"],
      bodies: ["loneliness isn't all the same. let's figure out what flavor this is.", "there are different versions of this. let's get specific."],
      choiceSets: [
        ["there's literally no one around", "i feel unseen or misunderstood", "i keep to myself — it's me", "i used to have people and now i don't"],
        ["my world is actually empty right now", "people are around but don't really see me", "i isolate and i know it", "i've drifted from people who mattered"]
      ]
    },
    l1: [
      { titles: ["what's the situation?", "tell me more about the 'no one'"],
        bodies: ["actually having no one around is a different kind of lonely — it's not just emotional distance, it's physical reality.", "some people don't have a built-in community. that's not a personal failure — it's a circumstance."],
        choiceSets: [["i genuinely don't have people in my life", "i'm new here or starting over", "i had people but something happened"], ["my social world is basically empty", "i relocated or restarted and haven't built anything yet", "i lost my community somehow"]] },
      { titles: ["unseen how?", "what does that feel like?"],
        bodies: ["being unseen is one of the more painful forms of loneliness — because you're technically not alone, but you might as well be.", "feeling misunderstood consistently takes a toll. it makes you stop trying to be known."],
        choiceSets: [["people talk at me, not with me", "i feel like a different species from everyone", "i try but nobody really gets it"], ["conversations stay surface-level", "i feel fundamentally different from everyone around me", "i reach out but don't feel received"]] },
      { titles: ["what makes you keep to yourself?", "what's behind the isolation?"],
        bodies: ["self-isolation often looks like a choice from the outside but doesn't feel like one from the inside.", "there's usually something underneath the pulling-away. let's see what's there."],
        choiceSets: [["being with people drains me", "i'm scared of rejection or judgment", "i don't really know how to connect"], ["social situations exhaust me", "putting myself out there feels too risky", "connecting doesn't come naturally to me"]] },
      { titles: ["what happened to the people?", "how did you drift?"],
        bodies: ["drifting apart is quiet. you don't notice it happening until one day you realize you haven't talked in a long time.", "losing connection that used to exist is a specific kind of grief — it's mourning something that didn't have an ending."],
        choiceSets: [["life took us different directions", "a falling out that was never fully repaired", "we just stopped making effort on both sides"], ["distance, time, different life phases", "something happened and we never recovered", "it faded without either of us really deciding to end it"]] }
    ],
    l2: [
      [
        { titles: ["genuinely no people", "your world is empty right now"],
          bodies: ["not having a community isn't a reflection of your worth. a lot of people don't have one — it's just not talked about.", "adults building friendships from scratch is genuinely hard. the systems that used to create connection automatically don't exist anymore."],
          choiceSets: [["i've never really had many people", "i used to have people but they're gone now", "i don't know how to make it happen as an adult"], ["always been more solo", "had people, lost them", "building from scratch and don't know how"]] },
        { titles: ["new place, new start", "starting over somewhere"],
          bodies: ["starting over socially is exhausting and takes way longer than people say it will. six months is not enough.", "being new somewhere means your whole social infrastructure is gone. that's a real loss even if it was your choice."],
          choiceSets: [["i moved for work or school", "i relocated after something ended", "i chose this change but didn't anticipate this part"], ["work or school brought me here", "i came here after something in my life ended", "my choice but harder than i thought"]] },
        { titles: ["your community broke apart", "something took the people away"],
          bodies: ["losing a community — through a breakup, a job loss, a move, a falling out — is its own grief. it often gets overlooked.", "when the container that held your social life breaks, everything scatters. that's disorienting."],
          choiceSets: [["a breakup took away the shared friend group", "a job or school change removed my people", "a specific event scattered everyone"], ["romantic relationship ended and took the friends", "circumstances removed my community", "a specific thing happened and people drifted"]] }
      ],
      [
        { titles: ["surface-level conversations", "no one goes deep with you"],
          bodies: ["being stuck in small talk when you want real conversation is its own loneliness. you're around people but nothing is actually landing.", "if every conversation is surface, you're socially active but emotionally alone. that gap is exhausting."],
          choiceSets: [["no one asks me real questions", "conversations never go past basic stuff", "i try to go deeper and people pull back"], ["no one seems curious about me", "everything stays shallow no matter what", "i reach for depth and get deflected"]] },
        { titles: ["feeling like a different species", "no one gets how you're wired"],
          bodies: ["feeling fundamentally different from everyone around you is isolating in a very specific way. like you're always translating.", "when you feel like no one shares your wavelength, you might start wondering if something is wrong with you. there isn't."],
          choiceSets: [["i think differently than most people around me", "my interests or values don't match anyone i know", "i've just never found my people"], ["my brain works differently", "i don't share much with the people in my life", "haven't found the people i actually belong with"]] },
        { titles: ["you try but it doesn't land", "reaching out but feeling nothing back"],
          bodies: ["making effort and still not feeling received is demoralizing. it makes the next attempt harder.", "when you try to connect and it doesn't work, the instinct is to assume the problem is you. it usually isn't."],
          choiceSets: [["i reach out but conversations feel one-sided", "i open up and regret it", "i try to connect but feel like i'm invisible"], ["i put in effort that doesn't get returned", "i've been vulnerable and it backfired", "i show up but don't feel seen"]] }
      ],
      [
        { titles: ["people drain you", "social situations exhaust you"],
          bodies: ["needing to recharge after social time is completely valid. the problem is when that recharging becomes permanent avoidance.", "introverted energy isn't the same as loneliness, but they can feed each other when isolation becomes the only option."],
          choiceSets: [["even small social interactions wear me out", "i cancel plans more than i go", "i want connection but dread the actual thing"], ["any social time costs me energy", "i avoid because the recovery cost is high", "desire to connect vs. dreading the doing of it"]] },
        { titles: ["scared of rejection", "the risk feels too high"],
          bodies: ["fear of rejection makes the cost of connection feel enormous. so you don't try. and then you're alone. and that confirms the fear.", "rejection sensitivity is real — but avoidance only makes the world smaller."],
          choiceSets: [["i don't reach out because i might be rejected", "past rejections are still affecting me", "i'd rather be alone than risk being turned down"], ["the risk of rejection stops me from trying", "i've been hurt before and it's still there", "certain is safer even if certain is lonely"]] },
        { titles: ["connecting doesn't come naturally", "you don't know how"],
          bodies: ["not knowing how to connect is more common than it looks. it's a skill, and a lot of people never got taught it.", "if connecting feels confusing or unnatural, that's not a character flaw — it's a gap in your toolkit."],
          choiceSets: [["i don't know what to say or how to start", "conversations fall apart when i try", "i never had a good model for this growing up"], ["small talk and opening up feel foreign", "i try and it gets awkward", "i didn't learn this stuff the way others did"]] }
      ],
      [
        { titles: ["life pulled you different directions", "you drifted without deciding to"],
          bodies: ["passive drift is the most common way friendships end — not with a fight, just with distance and less contact until one day it's been a year.", "when life circumstances change, the connections built around them often fade. that's not anyone's fault."],
          choiceSets: [["different cities, life stages, priorities", "we got busy and never got un-busy", "i'm not sure who moved on first"], ["geography or life changes separated us", "the drift happened gradually", "mutual slow fade"]] },
        { titles: ["something happened", "a falling out that never got fixed"],
          bodies: ["unresolved ruptures are their own kind of haunting — you still miss the person but there's no clean path back.", "an unrepaired falling out means you're carrying both the loss and the unfinished business."],
          choiceSets: [["we fought and never talked about it", "something was said and we couldn't come back from it", "i don't even know exactly what happened"], ["a fight that was never resolved", "a moment that changed things permanently", "it just fell apart without a clear reason"]] },
        { titles: ["you both stopped trying", "the effort just... stopped"],
          bodies: ["when both people stop initiating, the friendship just fades out. it's not dramatic — which almost makes it harder.", "the end without an ending is its own kind of grief. nothing to process, just absence."],
          choiceSets: [["neither of us was reaching out anymore", "i noticed and kept waiting for them to", "i think we both knew it was fading"], ["mutual stop in effort", "i noticed but didn't act", "it faded and neither of us stopped it"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need right now?", "what would help most?"],
        bodies: ["your world is pretty empty right now. what would be most useful to take from this?", "loneliness from a genuinely empty world needs a different response than social loneliness. what fits?"],
        choiceSets: [["just to know this is hard and normal", "how to actually start building something", "how to be okay while i'm in this in-between"], ["validation that starting from scratch is hard", "concrete starting points", "how to hold the loneliness without it crushing me"]] },
      { titles: ["what do you need most?", "what fits right now?"],
        bodies: ["feeling unseen is exhausting. what would be most useful to take from this?", "you're around people but nobody's really seeing you. what would help most?"],
        choiceSets: [["just to feel less invisible in this moment", "how to find people who actually get me", "how to stop caring so much about being understood"], ["acknowledgment that this is real and painful", "how to find my people", "how to carry this with less weight"]] },
      { titles: ["what would help most?", "what do you need from this?"],
        bodies: ["the isolation has a reason underneath it. what's most useful right now?", "self-isolation is protective but it costs you. what fits?"],
        choiceSets: [["just to not feel judged for it", "how to take small steps toward people", "understanding why i do this"], ["no judgment, just acknowledgment", "the smallest possible step toward connection", "insight into the pattern"]] },
      { titles: ["what do you need right now?", "what would help?"],
        bodies: ["you've drifted from people who mattered. what would be most useful to take from this?", "the distance hurts. what fits best for where you are?"],
        choiceSets: [["just to acknowledge that this is a real loss", "whether it's worth trying to reconnect", "how to build new connections from here"], ["validation that losing connection hurts", "whether repair is possible or worth it", "moving forward and building something new"]] }
    ],
    finals: [
      { titles: ["having no one isn't a verdict on who you are", "your social world is empty right now — that's a circumstance, not a character flaw"],
        bodies: ["not having people around is genuinely hard and genuinely fixable — but it takes longer than anyone says and the in-between period is the hardest part. you're in that in-between part. it's allowed to be hard.", "adult loneliness is one of the least talked-about painful experiences because people feel ashamed of it. but it's extremely common. the world didn't hand you a ready-made community after school ended — and building one from scratch takes real time and real effort."],
        tips: ["consistency beats intensity for building connections — showing up to the same place repeatedly is more powerful than any single conversation", "find an activity you'd do anyway, then do it with other people around. the shared activity carries the awkward conversation weight", "online communities are real communities — especially for specific interests or identities. don't discount them", "give new connections more time than feels natural. depth takes many interactions. don't write people off after one awkward hangout"] },
      { titles: ["feeling unseen is one of the loneliest things", "being around people and still feeling alone is a specific kind of hard"],
        bodies: ["when you're technically surrounded by people but not actually known by any of them, it can feel worse than being physically alone. the connection is close enough to see but not to reach. that's not your imagination — that gap is real.", "feeling like a different species from everyone around you might mean you haven't found your people yet — not that your people don't exist. they're out there being equally weird and misunderstood somewhere."],
        tips: ["find one person and go deeper, rather than trying to feel less lonely with everyone at once", "shared weirdness creates connection faster than common small talk. be a bit more yourself than feels comfortable", "find communities around specific interests or values — niche groups where everyone opted in to something", "if you consistently feel unseen, ask yourself: am i letting people see me? sometimes the barrier is protective hiding, not their disinterest"] },
      { titles: ["isolation is protective but it costs you", "pulling back makes sense — but it's a trade-off"],
        bodies: ["whatever is making you keep to yourself — energy, fear, not knowing how — it made sense at some point as a way to stay safe or comfortable. the cost is that it also keeps out the good stuff. you probably already know this.", "the pull toward isolation isn't weakness. but it does narrow your world progressively, and the longer it goes on, the harder the door is to open again. small steps matter more than big ones here."],
        tips: ["the first step back toward people doesn't have to be social — it can be physical proximity, like a coffee shop. being around people without having to perform helps", "one small reach-out per week. one. text, message, whatever. lower the bar as far as it goes", "if energy is the issue, structured social time helps — something with a defined start and end, so you know when you can leave", "rejection hurts but the accumulated cost of avoiding it is loneliness. small risk, small exposure. keep the stakes low"] },
      { titles: ["losing connection is its own grief", "drifting apart hurts even without a dramatic ending"],
        bodies: ["there's a specific sadness in losing connection that didn't end with a fight or a clear moment — it just faded. it's hard to grieve something that didn't have an ending. but the loss is real and it's allowed to hurt.", "the people you drifted from mattered. that doesn't just disappear because you don't talk anymore. the grief is appropriate. so is the impulse to reach back out — even when it feels too late."],
        tips: ["it's almost never too late to reach out. 'hey i've been thinking about you and miss you' is rarely badly received", "lower the expectation for what reconnection looks like — even one real exchange is more than nothing", "if the drift is just circumstance rather than conflict, a small consistent effort can rebuild it — but it usually needs to come from someone", "if rebuilding isn't possible or wanted, notice who's actually in your life right now. sometimes we miss old people while overlooking present ones"] }
    ]
  },

  overthinking: {
    root: {
      titles: ["what's the brain doing?", "where's the overthinking going?"],
      bodies: ["overthinking is always about something. let's find the source.", "your mind is in overdrive. let's find where it's stuck."],
      choiceSets: [
        ["stuck on a decision i can't make", "replaying something that already happened", "obsessing over what people think of me", "my brain just won't stop, about everything"],
        ["paralyzed by a choice", "looping on a past thing", "monitoring how i come across", "mental chaos with no clear target"]
      ]
    },
    l1: [
      { titles: ["what's the decision?", "what are you stuck on choosing?"],
        bodies: ["decision paralysis usually isn't about the decision — it's about the fear of making the wrong one and having to live with it.", "when both options feel weighted, your brain loops trying to find the 'safe' choice. there often isn't one."],
        choiceSets: [["a big life decision", "something that feels smaller but i can't let it go", "too many options and i can't narrow it down"], ["a major decision with real consequences", "a smaller thing that's taken on too much weight", "so many options i'm overwhelmed"]] },
      { titles: ["what are you replaying?", "what keeps coming back?"],
        bodies: ["rumination is your brain trying to solve something that's already happened. it's looking for a different ending it won't find.", "replaying the past is exhausting and never gets you anywhere new. your brain knows that — it just can't stop."],
        choiceSets: [["something i said or did that i regret", "a conversation that went wrong", "something someone did to me that i can't let go of"], ["i said or did something i wish i hadn't", "a specific interaction i keep analyzing", "something done to me that keeps circling back"]] },
      { titles: ["what are you monitoring?", "whose opinion is taking up space?"],
        bodies: ["social overthinking is your brain running reputation management in the background constantly. it's exhausting.", "monitoring how you come across is like having a second job that pays nothing and costs everything."],
        choiceSets: [["obsessing over how i came across to someone", "replaying a social interaction looking for what went wrong", "generally anxious about what people think of me"], ["did i seem weird or off in that interaction", "analyzing a specific conversation after the fact", "chronic low-grade worry about how i'm perceived"]] },
      { titles: ["what's the brain doing exactly?", "what does the chaos feel like?"],
        bodies: ["when overthinking has no single target, it's usually your overall stress load finding an outlet.", "undirected mental noise is often your brain processing more than it has bandwidth for."],
        choiceSets: [["too many thoughts at once, can't focus", "jumping between worries without landing on any", "just can't turn it off even when i try"], ["mental overwhelm — everything at once", "anxious channel-surfing in my head", "the off switch isn't working"]] }
    ],
    l2: [
      [
        { titles: ["a big life decision", "high stakes choice"],
          bodies: ["big decisions feel enormous because the weight of 'getting it wrong' feels enormous. but most big decisions are reversible — at least partially.", "the catastrophe of choosing wrong is usually smaller than your brain is modeling it as."],
          choiceSets: [["i'm scared of making the wrong call and regretting it", "i want certainty before i decide and can't get it", "i've been going back and forth and wearing myself out"], ["fear of regret is paralyzing me", "waiting for certainty that isn't coming", "flip-flopping and exhausting myself"]] },
        { titles: ["a smaller thing that got big", "taken on too much weight"],
          bodies: ["sometimes small decisions become huge because they've become stand-ins for bigger fears about identity or direction.", "the size of the overthinking doesn't always match the size of the decision. when it's outsized, the decision is usually symbolic of something bigger."],
          choiceSets: [["it shouldn't feel this big but it does", "i think it's representing something larger", "i've put so much time into it i can't step back"], ["outsized response to an objectively small thing", "feels like it's about more than just this", "sunk cost — now i can't stop"]] },
        { titles: ["too many options", "overwhelmed by choice"],
          bodies: ["too many options creates paradox of choice — having more options makes deciding harder, not easier.", "when the option space is too large, your brain struggles to eliminate. more options = more potential wrong answers."],
          choiceSets: [["i can't narrow it down", "every option seems to have a fatal flaw", "i keep researching and it keeps getting more complicated"], ["the list keeps expanding not shrinking", "every choice has a downside i fixate on", "more information makes it worse"]] }
      ],
      [
        { titles: ["something you said or did", "replaying your own actions"],
          bodies: ["regret-rumination is looking for a way to undo something that can't be undone. the brain won't stop because it believes if it thinks hard enough, it'll find a solution. there isn't one.", "replaying something you did is your conscience trying to process it. the loop means it hasn't finished processing — not that something is permanently wrong."],
          choiceSets: [["i said something i can't take back", "i made a choice i regret", "i keep wishing i'd handled it differently"], ["words or actions i wish i could redo", "a decision that feels like a mistake", "endless rewriting of what i should have done"]] },
        { titles: ["a conversation that went wrong", "a specific interaction you keep returning to"],
          bodies: ["post-conversation analysis is normal in small doses. in large doses it's your brain trying to achieve certainty about something that's already over.", "you're looking for the moment it went sideways. even if you find it, you can't change it. the loop needs an exit."],
          choiceSets: [["i don't know how they took what i said", "the conversation ended in a way that didn't resolve", "i think i came across badly and can't verify it"], ["unsure how i was received", "no clear ending and i'm filling in the blank", "i think i screwed it up but can't know"]] },
        { titles: ["something done to you", "someone else's actions living in your head"],
          bodies: ["when someone else does something hurtful or confusing and you can't stop replaying it, you're trying to understand something you may never fully get an answer to.", "looping on what someone else did is exhausting because you can't resolve it — you didn't control the input."],
          choiceSets: [["what they did doesn't make sense to me", "i keep trying to figure out why they did it", "i can't let go even though i know i should"], ["their behavior doesn't add up", "searching for an explanation i'm not getting", "holding it even though holding it hurts"]] }
      ],
      [
        { titles: ["one specific interaction", "replaying one thing in particular"],
          bodies: ["post-interaction replay is your brain scanning for threat after the fact. it's trying to catch what the real-time you missed.", "when one specific conversation keeps looping, it usually means something was left unresolved — said or unsaid."],
          choiceSets: [["i said something that might have landed wrong", "the conversation ended and i'm not sure where we stand", "i keep rerunning it to find what i missed"], ["something came out wrong", "the outcome was ambiguous", "looking for what i didn't catch in the moment"]] },
        { titles: ["chronic worry about perception", "general anxiety about how you come across"],
          bodies: ["chronic social monitoring is like running surveillance on yourself 24/7. it's exhausting because you're never fully just... present.", "when worrying about perception is constant — not tied to one event — it becomes background noise that colors everything."],
          choiceSets: [["i'm always wondering what people think of me", "i adapt myself depending on who i'm with", "i can't fully relax around people because i'm always monitoring"], ["always tracking my social performance", "constantly adjusting to seem okay", "presence is hard because the monitoring takes up space"]] },
        { titles: ["obsessing over one person's opinion", "one person's view has too much weight"],
          bodies: ["when one specific person's opinion is taking up mental real estate, it's worth asking why that person's view matters so much.", "fixating on one person's perception often means they represent something bigger — a standard you're holding yourself to."],
          choiceSets: [["someone specific whose opinion i can't stop caring about", "i want their approval and i hate that i do", "their view of me changes how i feel about myself"], ["one person's judgment matters too much to me", "wanting approval from someone i maybe shouldn't care about", "my self-perception depends on how they see me"]] }
      ],
      [
        { titles: ["mental overwhelm — everything at once", "too much running at once"],
          bodies: ["when your brain is running multiple worry-threads simultaneously, focus becomes impossible. it's not a lack of discipline — it's cognitive overload.", "mental chaos is often a sign you're carrying more than you have bandwidth for. something needs to be set down."],
          choiceSets: [["i can't focus on anything because everything competes", "my brain is jumping between topics constantly", "i can't tell what's actually important vs. what just feels urgent"], ["everything is equal urgency in my brain", "constant topic-switching without resolution", "can't sort signal from noise"]] },
        { titles: ["anxious channel-surfing", "jumping between worries"],
          bodies: ["jumping between anxieties without landing is your brain's way of avoiding sitting with any one thing long enough to deal with it.", "the switching feels like productive thinking but it isn't — it's just restless processing."],
          choiceSets: [["i start on one worry, move to another, never resolve any", "it feels like thinking but nothing gets done", "i can't hold still mentally"], ["round-robin worrying", "looks like thinking, feels productive, isn't", "mental restlessness i can't control"]] },
        { titles: ["can't turn it off", "the off switch is broken"],
          bodies: ["not being able to quiet your mind even when you want to is demoralizing. especially when you know it's not useful.", "when the brain won't stop even after you've told it to, it's usually because something underneath hasn't been acknowledged yet."],
          choiceSets: [["i try to stop and can't", "even at night my brain won't settle", "it exhausts me but keeps going anyway"], ["willpower isn't touching it", "nighttime is worst", "i'm tired of my own thoughts"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need most right now?", "what would actually help?"],
        bodies: ["decision paralysis is painful. what would be most useful to take from this?", "being stuck is its own kind of exhausting. what fits for you right now?"],
        choiceSets: [["help making the decision or at least moving", "permission to make an imperfect choice", "how to stop the loop even if i haven't decided yet"], ["a framework for actually choosing", "validation that imperfect is okay", "how to pause the spiral while i figure it out"]] },
      { titles: ["what do you need most?", "what would help right now?"],
        bodies: ["you've been replaying something. what would be most useful before we're done?", "rumination needs somewhere to land. what fits?"],
        choiceSets: [["how to actually stop the loop", "whether there's something i should do about it", "just to feel heard about this thing"], ["tools to break the replay cycle", "actionable next step if there is one", "someone acknowledging this is hard"]] },
      { titles: ["what do you need from this?", "what fits best?"],
        bodies: ["social monitoring takes a lot of energy. what would be most useful here?", "you've been tracking your performance with people. what matters most right now?"],
        choiceSets: [["how to care less about what people think", "that this is real and common and valid", "ways to actually be more present in conversations"], ["tools for turning down the social alarm", "validation i'm not the only one", "how to stop monitoring and just exist"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["mental chaos is exhausting. what would be most useful to take from this?", "your brain won't stop. what would help right now?"],
        choiceSets: [["how to create some quiet in my head", "understanding why my brain does this", "something practical to do with all this energy"], ["tools for calming the mental noise", "insight into what's driving it", "a place to direct all of this"]] }
    ],
    finals: [
      { titles: ["your brain is looking for certainty that doesn't exist", "the loop is trying to protect you — it just can't stop"],
        bodies: ["decision paralysis is your brain trying to guarantee the right outcome before you act. the problem is that guarantee doesn't exist for any decision worth making. at some point, information has diminishing returns and the only way through is to choose — imperfectly, with incomplete information, like every person who's ever made a decision.", "the cost of not deciding is also a decision. it just gets made by default rather than by you. most decisions are more reversible than they feel in the moment. and most 'wrong' choices teach you something the 'right' one wouldn't have."],
        tips: ["give yourself a deadline to decide — a real one. open-ended deciding is how it goes on forever", "write out both options, the worst realistic outcome for each, and whether you could handle that. usually you can", "ask: which choice do i lean toward when i'm not afraid? that lean is usually signal worth listening to", "done is better than perfect. an imperfect decision you can course-correct beats months of paralysis"] },
      { titles: ["replaying it won't change it — but it will change you", "the loop is looking for an exit it can't find"],
        bodies: ["rumination is your brain trying to solve a problem that's already over. it runs the scenario again, looking for a place where things go differently. that place doesn't exist — but the brain keeps looking because it hasn't been given somewhere else to go.", "the past replay is usually about one of two things: unprocessed emotion (you haven't actually let yourself feel what happened) or unfinished business (something needs to be said or done, and you haven't done it). figuring out which one is the key."],
        tips: ["give the thought a time limit — 10 minutes to think about it deliberately, then shift. structure helps more than suppression", "ask: is there anything i can actually do about this? if yes, do it. if no, the loop is keeping you in pain for no reason", "write it out in full — what happened, what you felt, what you wish were different. getting it outside your head changes it", "if it involves someone else, consider whether a direct conversation would actually give you something. sometimes it does"] },
      { titles: ["you're running social surveillance 24/7 — that's why you're exhausted", "caring what people think isn't the problem — the intensity is"],
        bodies: ["everyone cares what other people think. that's not a flaw — it's social wiring. the issue is when the monitoring never turns off, when you're tracking your performance in real time, when every conversation gets a debrief. at that level it stops being social awareness and starts being a tax on every interaction you have.", "the people you're worried about are almost certainly not thinking about you as much as you're thinking about them thinking about you. everyone is mostly preoccupied with their own performance."],
        tips: ["try to notice when you shift from present to monitoring. that's the moment to gently redirect back to the conversation", "most social 'mistakes' are invisible to the other person or forgotten within hours. your internal record is the only one keeping track", "ask: whose opinion am i most afraid of? then ask why that person's view carries so much weight. the answer is usually revealing", "the way to care less about what others think is exposure — doing things that risk judgment in small doses until the alarm desensitizes"] },
      { titles: ["your brain is at capacity — not broken", "mental noise this loud means your load is too heavy"],
        bodies: ["when the brain won't stop and there's no single target, it usually means you're processing more than your bandwidth allows. it's not a character flaw — it's overload. something needs to be set down, offloaded, or addressed before the noise goes down.", "undirected overthinking is almost always about accumulated unaddressed things. your brain knows something needs attention — it just can't figure out which thing, so it tries to process all of them at once."],
        tips: ["do a brain dump — write everything down without organizing it. just empty the cache", "figure out what's actually important vs. what just feels urgent. then do one important thing", "physical activity quiets mental noise faster than more thinking does", "reduce inputs: news, notifications, social media all add to the processing load. less in = quieter brain"] }
    ]
  },

  emptiness: {
    root: {
      titles: ["what's the emptiness about?", "where's it coming from?"],
      bodies: ["emptiness is specific — there are different kinds. let's figure out what type this is.", "there's always something underneath the emptiness. let's find it."],
      choiceSets: [
        ["nothing feels good or interesting anymore", "i'm going through the motions on autopilot", "i don't know who i am right now", "i just feel hollow, no other words for it"],
        ["things that used to matter don't", "functioning but not living", "lost my sense of self", "hollow is the only word that fits"]
      ]
    },
    l1: [
      { titles: ["nothing feels good?", "what's stopped working?"],
        bodies: ["anhedonia — when things stop feeling rewarding — is one of the more disorienting experiences. it's not sadness. it's absence.", "when the things that used to bring you joy go flat, it can feel like something's wrong with you. it's not. it's a signal."],
        choiceSets: [["things i used to love feel boring or pointless", "i can do things but feel nothing doing them", "i don't even know what i'd want anymore"], ["passions have gone flat", "functional but joyless", "totally lost track of what i care about"]] },
      { titles: ["tell me about the autopilot", "what does going through the motions look like?"],
        bodies: ["autopilot mode means you're meeting external demands while internally nothing is being registered. you're showing up but you're not there.", "functional emptiness is one of the hardest to explain because from the outside everything seems fine."],
        choiceSets: [["doing what needs to be done but feeling absent", "i can't tell if i'm okay or not — i'm just going", "days pass and i barely notice"], ["meeting obligations, feeling nothing", "numbness that looks like functioning", "time is passing and i'm not really in it"]] },
      { titles: ["what do you mean by 'i don't know who i am'?", "what shifted?"],
        bodies: ["identity drift happens slowly and then all at once. you don't notice it until you reach for yourself and come up empty.", "losing your sense of self is disorienting because it's not about something you lost — it's about losing the person who was supposed to be there."],
        choiceSets: [["i don't recognize my own reactions anymore", "my values or interests have shifted and i don't know to what", "i'm playing roles but don't know which one is actually me"], ["i'm not who i was but don't know what i became", "my interests and values have blurred", "performing selves but no core self underneath"]] },
      { titles: ["just hollow", "describe the hollow feeling"],
        bodies: ["some emptiness doesn't have a more specific name. hollow is its own real experience.", "the hollowness that doesn't have a cause is often the hardest to explain — and the most important to acknowledge."],
        choiceSets: [["nothing particularly wrong but nothing right either", "i feel like i'm missing something but can't name it", "it's not sadness or anger — it's just nothing"], ["objectively fine, subjectively empty", "missing something unnameable", "not an emotion, just an absence"]] }
    ],
    l2: [
      [
        { titles: ["passions went flat", "things stopped doing it for you"],
          bodies: ["when the things you used to love stop activating, it can feel like you've lost yourself. that activation hasn't disappeared — it's just blocked.", "anhedonia often comes after a long period of stress or depletion. the reward system goes quiet because it's been running on empty."],
          choiceSets: [["it happened gradually", "it happened after a specific event or period", "i don't know when it started"], ["slowly over time", "after something difficult happened", "can't trace when it changed"]] },
        { titles: ["functional but joyless", "you do things but feel nothing doing them"],
          bodies: ["being able to function while feeling nothing is its own kind of loss. everything looks normal from the outside while you're just... absent inside.", "functional emptiness is tricky because there's no obvious breakdown to point to. 'i'm fine' is technically true and completely not true."],
          choiceSets: [["i look fine to everyone else", "i do the things but there's nothing behind them", "i keep waiting to feel something and don't"], ["normal on the outside, hollow inside", "actions without meaning or feeling", "waiting for feeling that doesn't come"]] },
        { titles: ["don't know what you want", "lost track of what matters to you"],
          bodies: ["when you can't access what you want, it's often because you've spent too long prioritizing what others need, or suppressing preferences to manage relationships.", "losing track of desire — what you actually want, not what you should want — happens slowly and quietly."],
          choiceSets: [["i've been taking care of others and forgot myself", "i've suppressed what i want for so long i can't find it", "i genuinely don't know what would make me happy"], ["been serving others, lost track of me", "preference suppression over a long time", "completely disconnected from my own wants"]] }
      ],
      [
        { titles: ["meeting obligations but absent", "doing it all but not there"],
          bodies: ["when you show up to your life but don't feel like you're in it, that's a form of dissociation. it's your system protecting you from something by checking out.", "being physically present but emotionally absent is exhausting in a specific way — because you're still exerting energy while getting none of the benefits of being present."],
          choiceSets: [["responsibilities are handled but i feel absent", "it's like watching myself from the outside", "i go through the motions and then the day ends"], ["keeping it together externally", "depersonalization — watching from a distance", "the day just happens around me"]] },
        { titles: ["numbness that looks like coping", "functioning because you have to"],
          bodies: ["when you can't afford to fall apart, the mind sometimes numbs everything — not just the bad stuff. that's protective but expensive.", "numbing as a coping mechanism works in the short term. it becomes a problem when it starts numbing everything."],
          choiceSets: [["i think i've just numbed out to keep going", "i can't stop even if i wanted to", "i'm afraid of what i'd feel if i actually stopped"], ["survival mode disguised as being okay", "no option to stop so the feelings just shut off", "scared of what's under the numbness"]] },
        { titles: ["time is passing and you're not in it", "losing time without living it"],
          bodies: ["watching time pass without really being in it is disorienting. days become weeks and you can't account for them.", "when time passes in a blur, it usually means you're in a mode where you're managing rather than living."],
          choiceSets: [["weeks are passing and i don't know where they go", "nothing is memorable because nothing lands", "i feel like i'm behind the glass watching my own life"], ["can't account for the time", "nothing registers so nothing sticks", "observer in my own life"]] }
      ],
      [
        { titles: ["you don't recognize yourself", "your reactions feel foreign"],
          bodies: ["when your own reactions feel strange to you, it's because your sense of self has drifted from some baseline you're comparing to.", "not recognizing yourself is unsettling — especially when you're not sure what changed or when."],
          choiceSets: [["i react to things differently than i used to", "my emotional responses feel off", "i don't know what i actually feel anymore"], ["reactions that surprise me", "emotions that feel mismatched", "disconnected from my own inner experience"]] },
        { titles: ["values and interests have shifted", "you're not sure what you believe or care about"],
          bodies: ["values and interests shifting is actually normal over time — but it can feel like a crisis when it happens and you can't locate what replaced the old ones.", "when old values empty out before new ones fill in, there's a gap that feels like nothing. it's not nothing — it's transition."],
          choiceSets: [["things i used to care about don't matter anymore", "i don't know what i believe in anymore", "what i value now doesn't feel like me"], ["old commitments feel hollow", "lost my framework", "in-between two versions of myself"]] },
        { titles: ["performing selves, no core self underneath", "which one is actually you"],
          bodies: ["when you've been adapting to different contexts for long enough, you can lose track of which version is the real one.", "playing different roles isn't inherently a problem — but when no version feels authentic, that's where the emptiness comes from."],
          choiceSets: [["i'm different with different people", "none of my versions feel like the real me", "i don't know if there is a 'real me'"], ["chameleon mode, all the time", "multiple selves, no core", "wondering if i actually have an authentic self"]] }
      ],
      [
        { titles: ["objectively fine, subjectively empty", "everything's okay on paper"],
          bodies: ["being able to identify nothing concretely wrong while still feeling empty is confusing and lonely — especially when you feel like you 'should' be okay.", "the empty that doesn't have a cause is sometimes the hardest to validate because there's nothing obvious to point to."],
          choiceSets: [["i have things to be grateful for but still feel this way", "i feel guilty for feeling empty when things are fine", "i can't explain it and that makes it harder"], ["nothing wrong but not right either", "guilt about the emptiness makes it worse", "can't justify it and that's isolating"]] },
        { titles: ["missing something you can't name", "there's a gap but no word for what's in it"],
          bodies: ["the feeling of missing something without being able to name it is often about meaning — a sense that what you're doing adds up to something.", "that unnamed thing is often connection, purpose, or a version of yourself that you've drifted from."],
          choiceSets: [["i feel like something is missing but can't say what", "i'm looking for something but don't know what", "it feels like grief but i can't trace the loss"], ["a gap with no name", "searching for something undefined", "grief without an identifiable subject"]] },
        { titles: ["not an emotion — just absence", "nothing, not sadness or anger, just nothing"],
          bodies: ["pure emptiness — not sad, not angry, not anxious, just nothing — is one of the strangest and most isolating experiences because you can't process an absence the same way you process a feeling.", "when there's nothing there, even that 'nothing' is worth taking seriously."],
          choiceSets: [["i can't even call it sad — it's just blank", "i wish i felt something, even something bad", "the nothing is scarier than any actual emotion"], ["flat. that's all.", "missing the bad feelings too, because at least that's something", "the blank is the hardest part"]] }
      ]
    ],
    l3: [
      { titles: ["what would help most?", "what do you need right now?"],
        bodies: ["the joy went quiet. what would be most useful to take from this?", "anhedonia is disorienting. what fits for where you are?"],
        choiceSets: [["understanding why this happens", "how to get things to feel again", "just to know this isn't permanent"], ["insight into what's going on", "practical ways to reawaken feeling", "reassurance that it comes back"]] },
      { titles: ["what fits most right now?", "what would help?"],
        bodies: ["you're in autopilot. what's most useful to take from this?", "going through the motions is exhausting. what do you need?"],
        choiceSets: [["how to come back to myself", "just to feel less invisible", "understanding why i checked out"], ["a way back into my own life", "acknowledgment that this is real even if i look fine", "insight into what caused it"]] },
      { titles: ["what do you need most?", "what would help right now?"],
        bodies: ["identity drift is unsettling. what's most useful to take from this?", "not knowing who you are is hard. what fits?"],
        choiceSets: [["how to find myself again", "permission to be in between for now", "whether this is normal or something to worry about"], ["a path back to a sense of self", "permission to not have it figured out", "perspective on whether this is serious"]] },
      { titles: ["what do you need from this?", "what fits?"],
        bodies: ["the hollow feeling doesn't always have an explanation. what matters most right now?", "emptiness is real even without a cause. what would help?"],
        choiceSets: [["just to have someone acknowledge it's real", "how to sit with it without it consuming me", "whether something might be going on that i should address"], ["validation that this counts", "how to hold it without being held by it", "whether i should talk to someone about this"]] }
    ],
    finals: [
      { titles: ["the joy went quiet — not gone", "anhedonia is a symptom, not a verdict"],
        bodies: ["when things stop feeling rewarding, it doesn't mean you've permanently lost the ability to feel them. it usually means your system is depleted — running on such empty that the reward signals have gone quiet to conserve energy. it's a physiological and emotional state. it changes.", "anhedonia often follows a long period of stress, grief, overwork, or suppression. the brain's reward system gets worn down. the things that used to activate it require more energy than you have. the path back is usually not forcing yourself to enjoy things — it's rebuilding the energy that lets enjoyment happen naturally."],
        tips: ["don't force enjoyment — it usually backfires. try exposure to old passions in small doses without expecting anything", "basic recovery first: sleep, food, movement, sunlight. the reward system is physical and responds to physical care", "notice tiny sparks — things that create even a flicker of interest. follow those, even if they seem minor or silly", "if this has been going on for weeks or more, please consider talking to someone. anhedonia is something therapy and sometimes medication directly address"] },
      { titles: ["you're showing up to your life but not in it", "autopilot is a survival mode — it just shouldn't be permanent"],
        bodies: ["going through the motions is often what happens when life has demanded a lot for a long time and your system needed to conserve. it keeps you functional when falling apart isn't an option. the cost is presence — you stop being in your life and start just managing it.", "functional emptiness is real emptiness. it doesn't need to look like a breakdown to count. the fact that you can describe that you're on autopilot means part of you is watching and waiting to come back."],
        tips: ["try one thing per day that's genuinely just for you — not productive, not for anyone else, just something you'd choose", "anchor yourself to your senses for a few minutes: what can you see, hear, feel right now. it interrupts the autopilot loop", "tell one person you trust that you're not fully okay. even if you can't explain it. the disclosure itself can interrupt the autopilot", "if you've been in survival mode for a long time, something beneath it may need addressing. talking to someone is worth considering"] },
      { titles: ["you're between versions of yourself — that's uncomfortable but not broken", "identity drift is disorienting but it passes"],
        bodies: ["losing your sense of self often happens between a version of you that you've outgrown and a version that hasn't fully formed yet. you're not nothing — you're in transition. that gap is real and uncomfortable, but it's not permanent.", "the version of you that's coming isn't the same as the one you lost, and it's not supposed to be. identity evolves — it doesn't return to a previous state. but it does stabilize again. you're in the disorienting middle part."],
        tips: ["don't try to force a sense of self — it usually comes from action, not reflection. try things and see what resonates", "reconnect with old things you loved before life got complicated. the thread back to yourself is often something simple from before", "ask: what do i actually value right now, not what i'm supposed to value? even a partial answer is useful", "journaling works well for identity drift — not to find answers, but to track what shows up when you write without editing yourself"] },
      { titles: ["the hollow is real — even without a reason", "emptiness without a cause still deserves care"],
        bodies: ["you don't need to explain or justify the emptiness. it doesn't require a dramatic origin story to be real and worth addressing. sometimes the body and mind accumulate things quietly, and emptiness is how that accumulation surfaces.", "the hollow feeling that doesn't have a name often resolves not through understanding it but through small acts of care. your system is asking for something. even without knowing exactly what, you can start offering things."],
        tips: ["be gentle with yourself — forcing insight or explanation often makes it worse. just take care of basics", "consider talking to someone — a therapist, doctor, or trusted person. persistent emptiness without cause is worth investigating gently", "try tiny acts of presence: a walk without headphones, a meal you actually taste, a conversation without your phone. small", "if you think there might be something medical (thyroid issues, vitamin deficiencies, depression) it's worth ruling those out"] }
    ]
  },

  stress: {
    root: {
      titles: ["what's stressing you out?", "where's the pressure coming from?"],
      bodies: ["stress always has a source. let's find where it's coming from.", "your system is under load. let's figure out what's carrying the weight."],
      choiceSets: [
        ["work or school is overwhelming me", "money stuff is stressing me", "relationship tension", "i've taken on too much"],
        ["professional or academic pressure", "financial stress", "stress from people in my life", "overcommitted and drowning"]
      ]
    },
    l1: [
      { titles: ["what's happening at work or school?", "what's the load looking like?"],
        bodies: ["work and school stress is so normalized that people forget it's legitimate and it accumulates. it does.", "the grind culture makes it hard to admit how much this is actually getting to you. it's getting to you."],
        choiceSets: [["too much to do and not enough time", "i feel like i'm failing or falling behind", "the environment itself is toxic or hard"], ["overwhelmed by volume", "performance anxiety or fear of failure", "the place itself is the problem"]] },
      { titles: ["what's the money situation?", "what kind of financial stress?"],
        bodies: ["financial stress activates survival systems. it's not just 'money stuff' — it goes deep into basic security.", "money stress is one of the most pervasive and least acknowledged forms of stress. it touches everything."],
        choiceSets: [["not enough coming in", "debt or bills i can't handle", "uncertainty about the future financially"], ["income isn't covering what i need", "carrying debt that's hard to manage", "financial future feels unstable or unclear"]] },
      { titles: ["what's going on with people?", "which relationships are creating the stress?"],
        bodies: ["relationship stress is uniquely exhausting because the stressor is also the person you might normally turn to for support.", "when the tension is with people in your life, it follows you everywhere — there's no clocking out."],
        choiceSets: [["romantic relationship tension", "family friction", "friend drama or conflict at work"], ["stress with a partner", "family is creating pressure or conflict", "social/work relationships that are difficult"]] },
      { titles: ["what did you take on?", "where's the overcommitment?"],
        bodies: ["taking on too much usually comes from good intentions — wanting to help, not wanting to disappoint, believing you can handle it. then it compounds.", "overcommitment is often a pattern rather than a one-time thing. let's look at what's there."],
        choiceSets: [["too many obligations i can't keep up with", "i said yes to things i should've said no to", "i'm responsible for too many people or things"], ["my plate is overflowing", "can't say no and now i'm drowning", "too many people depending on me"]] }
    ],
    l2: [
      [
        { titles: ["too much, not enough time", "volume is the problem"],
          bodies: ["task overload without enough time is a structural problem, not a personal one. it's not solved by working harder.", "when the volume exceeds what's humanly possible, something has to give — ideally by choice, not by collapse."],
          choiceSets: [["more on my plate than i can physically do", "i'm putting in hours and still falling behind", "i don't know what to drop first"], ["mathematically too much", "effort without dent in the backlog", "can't prioritize because everything is priority"]] },
        { titles: ["feeling like you're failing", "fear of falling short"],
          bodies: ["performance stress is about the gap between where you are and where you think you need to be. it's not necessarily about actual failure — it's the fear of it.", "the fear of falling short can be more exhausting than actually falling short would be."],
          choiceSets: [["i'm scared i'm not meeting the standard", "i feel like i'm disappointing people", "i compare myself to others and come up short"], ["performance anxiety is constant", "worried about letting people down", "measuring myself against others and losing"]] },
        { titles: ["the environment is the problem", "toxic or hard situation"],
          bodies: ["when the stress isn't just about workload but about the actual environment — the culture, the management, the dynamic — that's a different kind of heavy.", "environment-caused stress is harder because you can't just work harder to fix it. it requires a different response."],
          choiceSets: [["difficult people i have to deal with daily", "the culture or management is bad", "i don't feel safe or respected in this environment"], ["the people are the problem", "systemic issues i can't individually fix", "environment that doesn't feel okay to be in"]] }
      ],
      [
        { titles: ["not enough coming in", "income is the stress"],
          bodies: ["when income doesn't cover needs, the stress is constant because it's present in every decision.", "scarcity stress is pervasive because it touches every corner of life."],
          choiceSets: [["i can't cover basic needs consistently", "i'm one unexpected expense from a crisis", "i'm working but it's not enough"], ["basics aren't consistently covered", "living on the edge of a financial emergency", "working hard but not getting ahead"]] },
        { titles: ["carrying debt", "the bills are the stressor"],
          bodies: ["debt stress has a weight to it that doesn't let up. it's always in the background of every financial decision.", "managing debt on top of current expenses is a constant cognitive and emotional load."],
          choiceSets: [["debt i don't see a way out of", "minimum payments and not getting anywhere", "the interest is eating me alive"], ["feels like an impossible hole", "treading water on debt", "the numbers aren't moving"]] },
        { titles: ["financial future feels unstable", "uncertainty about what's ahead"],
          bodies: ["financial uncertainty stress is about not being able to see a stable path forward. the not-knowing activates anxiety even if right now is okay.", "future financial instability is exhausting because there's nothing concrete to fix yet — it's anticipatory stress."],
          choiceSets: [["i don't know if i'll be okay in a year", "no savings or safety net", "my financial situation is unpredictable"], ["uncertain what the future looks like financially", "nothing to fall back on", "income or situation could change at any time"]] }
      ],
      [
        { titles: ["tension with a partner", "romantic relationship is stressing you"],
          bodies: ["romantic relationship stress is all-pervasive because that person is usually your closest person. when things are hard there, everything else feels harder.", "stress with a partner doesn't stay in the relationship — it follows you into work, into sleep, into everything."],
          choiceSets: [["ongoing conflict or tension between us", "i feel disconnected or unseen by them", "i'm not sure the relationship is right"], ["we keep fighting or have ongoing friction", "emotional distance has grown", "questioning whether this is working"]] },
        { titles: ["family friction", "family is creating stress"],
          bodies: ["family stress is particularly heavy because it often comes with history, obligation, and identity all mixed together.", "you can't always distance from family the way you can from other relationships. it's often inescapable."],
          choiceSets: [["conflict with parents or siblings", "family expectations i can't meet", "family dynamics that are toxic or draining"], ["direct conflict with family members", "pressure to be or do what they want", "the family system itself is unhealthy"]] },
        { titles: ["friendship or work drama", "social tensions are the stressor"],
          bodies: ["interpersonal tensions at work or in friendships are draining because they follow you into spaces where you're supposed to be effective or relaxed.", "social conflict adds a layer of hypervigilance — you're managing the relationship while also trying to do everything else."],
          choiceSets: [["conflict with a colleague or friend", "tension that's making a space uncomfortable", "i'm caught in something i didn't start"], ["direct conflict with someone", "a situation that's poisoned an environment", "caught in others' drama"]] }
      ],
      [
        { titles: ["plate is overflowing", "too many commitments"],
          bodies: ["when you've taken on more than you can carry, the stress is structural. no amount of efficiency fixes a fundamentally overloaded system.", "overcommitment usually comes from a combination of wanting to help, difficulty saying no, and underestimating how much each thing costs."],
          choiceSets: [["i don't know how to reduce the load", "everything feels urgent and important", "i can't stop adding without removing"], ["no clear thing to cut", "all of it seems necessary", "adding but not subtracting"]] },
        { titles: ["can't say no", "kept saying yes when you shouldn't have"],
          bodies: ["difficulty saying no often comes from fear — of disappointing, of being seen as unhelpful, of missing out. but the cost is accumulated overload.", "every yes to something that doesn't fit is a no to something that matters."],
          choiceSets: [["i say yes to avoid disappointing people", "i don't know how to decline without guilt", "i underestimate how much i'm already carrying"], ["people-pleasing is overloading me", "guilt around no is the problem", "bad at gauging my own capacity"]] },
        { titles: ["too many people depending on you", "carrying others as well as yourself"],
          bodies: ["being responsible for other people's wellbeing on top of your own is a particular kind of load. it leaves no margin.", "when others are depending on you, there's often no permission to collapse — which means the stress compounds without release."],
          choiceSets: [["i'm the one everyone leans on", "i don't have anyone to lean back on", "i'm depleted from giving and have nothing left"], ["anchor for others with no anchor myself", "caretaking with no reciprocation", "pouring out with no refill"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need most right now?", "what would help?"],
        bodies: ["work or school is the load. what's most useful to take from this?", "the pressure is real. what fits best right now?"],
        choiceSets: [["how to handle the volume better", "permission to not be okay under this much pressure", "how to talk to someone about changing the load"], ["practical stress management", "validation that this much is actually a lot", "how to have the conversation that might change things"]] },
      { titles: ["what do you need from this?", "what would help most?"],
        bodies: ["financial stress is heavy. what's most useful to take from here?", "money stress touches everything. what fits right now?"],
        choiceSets: [["just to feel less alone in this", "practical first steps even if small", "how to stop it from affecting everything else"], ["acknowledgment that this is hard", "something concrete i can do", "how to mentally compartmentalize it"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["people stress is all-pervasive. what's most useful right now?", "relationship tension follows you everywhere. what fits?"],
        choiceSets: [["how to handle the specific situation", "just to feel heard about it", "how to protect my energy from it"], ["a strategy for the situation", "someone to acknowledge how hard this is", "how to stop it from consuming me"]] },
      { titles: ["what do you need most?", "what would help?"],
        bodies: ["you're overloaded. what's most useful to take from this?", "too much is on you. what fits best?"],
        choiceSets: [["how to start reducing the load", "permission to say no going forward", "how to hold it until i can reduce it"], ["a starting point for cutting back", "permission to set limits", "how to survive the current overload"]] }
    ],
    finals: [
      { titles: ["you're carrying a real load — not imagining it", "this level of pressure is genuinely a lot"],
        bodies: ["work and school stress gets normalized to the point where people stop believing they're allowed to struggle under it. you are allowed. the volume you're managing, the standards you're being held to, the energy you're putting out — it's a lot. your stress is proportional.", "the grind shouldn't feel this heavy all the time. when it does, that's information — not weakness. your body and mind are telling you something about the current situation that deserves to be heard."],
        tips: ["write down everything on your plate. seeing it all out makes it easier to distinguish between what's actually required vs. what you've added out of habit or fear", "identify the one thing that would provide the most relief if it moved. start there, not everywhere at once", "if the volume is set by others, have one clear conversation about what's realistic. most people respond better to honesty than to you quietly drowning", "protect sleep above everything else. cognitive function under chronic stress collapses first without it"] },
      { titles: ["financial stress is survival stress — it hits different", "money stress goes deep because it's about security"],
        bodies: ["financial stress isn't just about money — it's about safety. your brain treats financial insecurity the same way it treats physical threat. that's why it's so pervasive and exhausting. you're not weak for being affected by it. you're human.", "dealing with financial pressure while also trying to live your life is genuinely hard. it colonizes your thinking. it affects your sleep. it changes how you relate to people. acknowledging how heavy it actually is — not just functionally but emotionally — is the first real step."],
        tips: ["write out the full picture: income, expenses, debt, savings. anxiety is often bigger than reality. seeing it clearly (even if bad) helps more than avoiding it", "one small financial action is better than none. even setting up an automatic small saving or calling about one bill. momentum matters", "if there's a specific financial crisis, look up local resources — food banks, rent assistance, financial counseling. more exists than people know", "separate the stress management from the financial management. you need both: a way to cope with the emotional weight and a plan for the situation itself"] },
      { titles: ["when people are the stressor, there's no off switch", "relationship tension follows you — that's why it's so exhausting"],
        bodies: ["stress that comes from people in your life is particularly hard because those people are everywhere — in your home, your head, your daily life. you can take a break from work. you can't always take a break from a partner or family member. the stress lives with you.", "interpersonal tension creates hypervigilance — you're managing the relationship dynamics on top of everything else you're trying to do. it's an invisible second job that nobody accounts for."],
        tips: ["name the specific problem clearly, to yourself first. vague 'relationship stress' is harder to address than 'we keep fighting about X'", "if it's a conflict you can address directly — address it directly. avoidance extends the tension", "if you can't address it right now, find ways to create emotional distance even when physical distance isn't possible", "if the relationship is consistently draining with no good periods, that's worth taking seriously — for your own health"] },
      { titles: ["you've taken on more than one person should carry", "the overload is real and something has to give"],
        bodies: ["overcommitment isn't a character flaw — it's usually the result of caring too much, not wanting to let people down, and underestimating the cumulative weight of each thing you say yes to. but a system at 140% capacity will break somewhere. better to choose where than to wait for the system to choose for you.", "the hardest part of overcommitment is that everything that's on your plate probably matters. cutting feels like failing. but maintaining an impossible load isn't noble — it's just unsustainable."],
        tips: ["list everything you're responsible for and ask: what would actually happen if i didn't do this one thing? the answer is often 'less than i think'", "a 'not right now' is not the same as a 'no forever'. you can step back from things without abandoning them", "someone who drains you by depending on you without reciprocating isn't a relationship that's working. it's okay to notice that", "protect one block of time per week that is genuinely just for you — non-negotiable. you can't pour from an empty cup is a cliché because it's true"] }
    ]
  },

  numbness: {
    root: {
      titles: ["what kind of numbness?", "when did you start feeling this way?"],
      bodies: ["numbness is always protective — but the source matters. let's figure out what's being protected.", "something underneath has gone quiet. let's find out what it is."],
      choiceSets: [
        ["something happened and i shut down", "it crept up gradually over time", "i think i've always been kind of detached", "i'm so overwhelmed that nothing's registering"],
        ["a specific thing shut me down", "slow fade over weeks or months", "emotional detachment is just my baseline", "overload made everything go flat"]
      ]
    },
    l1: [
      { titles: ["what happened?", "what shut you down?"],
        bodies: ["sudden emotional shutdown after something difficult is your nervous system protecting you from more than it can process. it's adaptive — not a failure.", "the numbing that follows a specific event is your system buying time."],
        choiceSets: [["something painful happened recently", "something accumulated until i shut down", "i can't fully name what happened — i just shut off"], ["a specific event triggered it", "pressure built until something broke", "it shut off without a clear reason"]] },
      { titles: ["how long has it been building?", "what did the fade look like?"],
        bodies: ["gradual emotional fade is sneaky — you don't notice it until it's been there a while. days on a dimmer switch that slowly went down.", "a slow build to numbness usually means something has been asking for attention for a long time and not getting it."],
        choiceSets: [["weeks of slowly feeling less", "i burned out and this is what's left", "i stopped being affected by things gradually"], ["progressively less feeling over time", "came after depletion", "things stopped landing, slowly"]] },
      { titles: ["is this your baseline?", "has detachment always been your default?"],
        bodies: ["some people developed emotional detachment early — as a way to survive things that were too much. it becomes the normal setting.", "when numbness is a long-term default, it's often been serving a protective function for a very long time."],
        choiceSets: [["i've always been hard to read", "strong feelings feel dangerous to me", "i cut things off before they can affect me"], ["emotional detachment is just how i'm wired", "feelings feel risky or overwhelming", "i preemptively protect myself"]] },
      { titles: ["what pushed you over?", "what's the overload?"],
        bodies: ["when the emotional system gets saturated, it shuts everything off. it's a circuit breaker, not a character flaw.", "emotional numbness from overload means you've been through too much without enough recovery."],
        choiceSets: [["too much happened too fast and i can't feel it", "i've been in crisis mode for so long feeling is a luxury", "i'm so stressed or exhausted that nothing lands"], ["overwhelm triggered a shutdown", "survival mode for too long, feeling turned off", "sheer volume made everything go flat"]] }
    ],
    l2: [
      [
        { titles: ["something painful happened", "a specific event triggered the shutdown"],
          bodies: ["emotional shutdown after pain is your brain protecting you from more input than it can process at once. it's not permanent.", "the numbness after a painful event is like a circuit breaker — it'll come back online when it's safe."],
          choiceSets: [["loss, trauma, or something that hurt deeply", "a shock i haven't processed yet", "something happened but i don't know how to feel about it yet"], ["something genuinely hard happened", "processing hasn't started yet", "haven't landed on how to feel"]] },
        { titles: ["accumulated until you shut down", "pressure built until something broke"],
          bodies: ["accumulated stress that finally reaches a tipping point often produces this kind of flat shutdown. the system was at capacity, and this is the off switch.", "when there's no single event but it still happened, the accumulation itself was the cause."],
          choiceSets: [["it wasn't one thing — it was everything", "i just stopped being able to feel anything at some point", "i kept going until i couldn't anymore"], ["chronic accumulation", "gradual until suddenly nothing", "kept pushing past the limit"]] },
        { titles: ["it just shut off, no clear reason", "happened without an obvious cause"],
          bodies: ["numbness without a clear trigger is usually your system responding to something it registered before your conscious mind caught up to it.", "the absence of a named cause doesn't make it less real."],
          choiceSets: [["can't point to what caused it", "it just happened without warning", "nothing particular but everything went flat"], ["no single thing, just nothing", "showed up without warning", "flat without explanation"]] }
      ],
      [
        { titles: ["weeks of slowly feeling less", "progressive fade"],
          bodies: ["a slow fade in feeling usually means something has been asking for attention that's been pushed down or ignored.", "when the fade is gradual, there's often something underneath that needs processing that's been deferred."],
          choiceSets: [["i can identify when it started getting worse", "it happened gradually and i didn't notice until now", "i think stress or exhaustion drove it"], ["there's a traceable timeline", "i noticed too late", "something was accumulating quietly"]] },
        { titles: ["what's left after burnout", "depletion made the feelings go"],
          bodies: ["burnout numbness is what happens when you've run the emotional engine past empty. there's nothing left to feel with.", "after depletion, numbness is the body's way of conserving the last reserves."],
          choiceSets: [["i burned out and this is what's left", "i gave everything i had and now there's nothing", "the caring turned off along with everything else"], ["post-burnout flatness", "gave too much for too long", "caring capacity got depleted"]] },
        { titles: ["things stopped landing", "gradually stopped being affected"],
          bodies: ["when things stop landing — good or bad — it's because the emotional processing has slowed down under the weight of too much.", "gradually becoming less affected is often missed until someone notices you're not reacting to things that would normally matter."],
          choiceSets: [["good news and bad news feel the same now", "i watch things happen and feel nothing", "i know i should care more but i don't"], ["flat affect for good and bad", "observer mode, nothing registers", "the should-care is there but the actual care isn't"]] }
      ],
      [
        { titles: ["emotional detachment is your wiring", "you've always been this way"],
          bodies: ["long-term emotional detachment often developed early as protection. it was useful. it may have become a cage.", "when detachment is the baseline, it's usually served a protective function for a long time. the question is whether it's still needed."],
          choiceSets: [["it's always been how i am", "it developed after something difficult", "i don't know if it's just how i'm built or something that happened"], ["lifelong baseline", "developed as a response to something", "can't tell if it's nature or nurture"]] },
        { titles: ["feelings feel dangerous", "you cut them off before they start"],
          bodies: ["when strong emotions feel threatening, pre-emptive shutdown becomes the strategy. it keeps you 'safe' but also keeps everything else out.", "if feelings have historically caused problems — overwhelm, loss of control, people reacting badly — avoiding them makes sense as a survival strategy."],
          choiceSets: [["strong emotions overwhelm me", "showing feelings hasn't been safe in the past", "i don't trust what i'd do if i let myself feel"], ["emotional intensity is overwhelming", "past experience made feeling unsafe", "fear of losing control if i feel"]] },
        { titles: ["preemptive emotional protection", "you shut down before anything can reach you"],
          bodies: ["closing off before something can hurt you is a strategy that works — and costs you connection, joy, presence.", "preemptive numbness is an understandable response to having been hurt. it's also a kind of self-imprisonment."],
          choiceSets: [["i don't let things get close enough to matter", "i pull back before i can get invested", "i don't know how to let things in"], ["never let things matter enough to hurt", "exits before attachment can form", "the door never fully opens"]] }
      ],
      [
        { titles: ["too much too fast", "the system overloaded"],
          bodies: ["when too many things happen at once, emotional processing can't keep pace and the system shuts down to avoid input overload.", "overload-triggered numbness is the system protecting itself from more than it can handle at one time."],
          choiceSets: [["multiple hard things happened in a short window", "i went into survival mode and feeling turned off", "my bandwidth got maxed out"], ["several hard things at once", "crisis mode activated, feelings deactivated", "exceeded emotional bandwidth"]] },
        { titles: ["survival mode for too long", "been in crisis so long feeling is a luxury"],
          bodies: ["extended survival mode — where you're just managing crises without space to actually feel them — eventually produces numbness as the default state.", "when you can't afford to feel because the situation demands all of your resources, feeling turns off. that's not failing — that's coping."],
          choiceSets: [["been in crisis mode for months", "i don't have the luxury of falling apart", "i keep it together because i have to and now i can't stop"], ["chronic crisis, chronic numbness", "no permission to feel", "holding it together so long i've forgotten another mode"]] },
        { titles: ["sheer volume made everything flat", "overload shut it all down"],
          bodies: ["when stress, demands, and input exceed capacity, the emotional system often goes into conservation mode — everything goes flat.", "flat-from-overload is different from genuine depression but it feels similar. it's your system saying it needs a break it hasn't been getting."],
          choiceSets: [["i'm overwhelmed in every area of my life", "too much is expected of me", "nothing is landing because everything is competing for my processing"], ["overwhelmed across the board", "demands exceed capacity everywhere", "competing inputs mean nothing gets through"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need most right now?", "what would help?"],
        bodies: ["you shut down after something happened. what's most useful to take from this?", "the numbness came from somewhere. what fits for where you are?"],
        choiceSets: [["just to have it acknowledged that i'm not okay", "how to slowly come back online", "whether there's something i should do about what happened"], ["someone to see that this is real even if i look fine", "a gentle path back to feeling", "whether i need to address the event itself"]] },
      { titles: ["what do you need from this?", "what would help most?"],
        bodies: ["the fade was gradual. what's most useful to take from this?", "slow numbness needs a specific kind of response. what fits?"],
        choiceSets: [["understanding why this happens", "how to reverse the fade", "whether i need to talk to someone"], ["insight into the pattern", "practical ways to reawaken feeling", "whether this warrants professional support"]] },
      { titles: ["what fits best right now?", "what do you need?"],
        bodies: ["if detachment is your baseline, what's most useful to take from this?", "long-term detachment is its own thing. what matters most right now?"],
        choiceSets: [["just to understand why i'm wired this way", "whether it's possible to change it", "how to live with it in a way that doesn't isolate me"], ["insight into where it comes from", "whether change is possible", "how to have connection despite it"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["you're in overload-numbness. what's most useful to take from this?", "the system shut down from too much. what fits?"],
        choiceSets: [["how to reduce the load that caused this", "how to come back online while the load is still high", "just to feel less alone in this state"], ["structural change to reduce input", "how to feel while still in the thick of it", "acknowledgment that this is real and hard"]] }
    ],
    finals: [
      { titles: ["the shutdown is protection, not permanent", "numbness after pain is your system buying time"],
        bodies: ["emotional numbness after something difficult is your nervous system's way of protecting you from more than it can process at once. it's not a sign that something is permanently broken or that you're not grieving 'correctly'. the feelings will come when it's safe. they're just queued, not gone.", "the numbness is doing something — it's letting you function while the deeper processing happens beneath the surface. try not to force feeling before it's ready. trust that it will come."],
        tips: ["be patient with the timeline. grief and emotional processing don't follow schedules", "don't force feeling — but don't suppress it either. when something surfaces, let it", "write about what happened even if you can't feel it yet. sometimes the writing opens what the mind can't", "if the numbness has gone on for a long time and you're concerned, talking to a therapist is worth it — they can help the system come back online safely"] },
      { titles: ["gradual numbness means something's been asking for attention", "the slow fade is the system giving up on being heard"],
        bodies: ["when feeling fades gradually, it's usually because something has been asked to wait too long — stress that wasn't addressed, emotions that were set aside to function, needs that were deferred. the system eventually stops trying to bring them up.", "a slow fade to numbness is its own kind of message. something needed care that didn't get it. the numbness is what's left when the asking stopped."],
        tips: ["try to remember when it started getting worse. what was happening then? that's often where the answer is", "small sensory experiences help reawaken feeling — music you used to love, foods that mean something, physical contact with people or animals", "reduce things that are numbing you further: excessive screen time, alcohol, anything you're using to not feel", "if it's been a long time, please talk to someone — gradual emotional numbing is something therapy can address specifically"] },
      { titles: ["detachment was a tool — it may have become a cage", "the armor that kept you safe might also be keeping you in"],
        bodies: ["emotional detachment usually developed for a good reason — it kept you safe in situations where feeling everything wasn't possible or safe. that was useful. the question worth asking now is whether those original conditions still exist, or whether the protection is running on autopilot past its expiry date.", "being hard to reach emotionally costs you. it costs connection, joy, the ability to be fully present with people who matter. none of that is inevitable. detachment can be unlearned, usually gradually, with the right support."],
        tips: ["try small experiments with vulnerability — sharing one thing slightly more personal than usual, with one safe person", "therapy designed around attachment and emotional processing (like somatic work or EMDR) can be specifically useful here", "notice what you feel in your body when something should produce emotion. the body often has the feeling even when the mind has shut off", "ask yourself: what would i feel if i let myself? the fact that you can imagine an answer means the feeling is still there"] },
      { titles: ["your system shut down because it had to — now it needs recovery", "overload numbness is a circuit breaker, not a failure"],
        bodies: ["when your emotional system shuts down from overload, it's the equivalent of a fuse blowing. it's protecting something. the problem isn't the shutdown — it's that the load was too high for too long. the numbness is telling you something real: this much input, this many demands, this sustained a pace is not sustainable.", "coming back online from overload-numbness requires actually reducing the load — not just managing the symptoms. you need less input, more recovery, and real rest. not more productivity while numb."],
        tips: ["something has to come off your plate. not reorganized — actually removed. identify one thing and remove it", "physical rest is different from mental rest. lying down while still consuming content isn't recovery. you need genuine quiet", "let yourself be unavailable to other people's needs for a period. your numbness is your system saying 'no more input'", "if the load can't be reduced right now, create small pockets of nothing — 20 minutes where nothing is expected of you. even tiny recovery accumulates"] }
    ]
  },

  shame: {
    root: {
      titles: ["what's the shame about?", "where's it coming from?"],
      bodies: ["shame points somewhere specific. let's find where.", "there are different types of shame. let's figure out which this is."],
      choiceSets: [
        ["something i did", "who i am as a person", "something that happened to me that wasn't my fault", "i never feel like i'm enough"],
        ["an action i took", "my identity or character", "shame about something done to me", "chronic 'not enough' feeling"]
      ]
    },
    l1: [
      { titles: ["what did you do?", "tell me about the thing"],
        bodies: ["action-based shame is guilt's more intense cousin — guilt says 'i did something bad', shame says 'i am bad for doing it'. the distinction matters.", "something you did is not the same as who you are. that's the hardest thing to hold onto when shame is loud."],
        choiceSets: [["i hurt someone", "i acted in a way that doesn't match my values", "i did something i'm embarrassed by"], ["i caused harm to someone", "i went against who i want to be", "i did something that humiliates me"]] },
      { titles: ["what is it about you that you're ashamed of?", "what feels unacceptable about who you are?"],
        bodies: ["identity shame is the deepest kind because it's not attached to something you did — it's attached to who you are. it's harder to address because there's nothing specific to fix.", "when shame is about your identity — your body, sexuality, background, way of being — it often comes from messages absorbed early about what's acceptable."],
        choiceSets: [["my body or how i look", "something about my identity or background", "how my mind works or who i am fundamentally"], ["physical shame", "identity shame — who i am at a basic level", "shame about how i'm wired or where i come from"]] },
      { titles: ["what happened to you?", "something was done to you?"],
        bodies: ["shame about things that were done to you — abuse, trauma, violation — is misplaced shame. it belongs to whoever did the thing, not to you.", "survivors often carry shame for what was done to them. that's a transfer that happened without your consent."],
        choiceSets: [["something was done to me and i feel ashamed of it", "i didn't stop something i think i should have", "i blame myself for something that wasn't my fault"], ["i'm ashamed of what happened to me", "i feel like i should have prevented it", "i take responsibility for someone else's actions"]] },
      { titles: ["how long has the 'not enough' been there?", "what does 'not enough' mean for you?"],
        bodies: ["chronic insufficiency shame is background shame that doesn't tie to any single thing — it's a general sense of not measuring up.", "when nothing you do feels like enough, the shame isn't about any particular action — it's been internalized as a general verdict."],
        choiceSets: [["i feel like i constantly fall short", "i compare myself to others and always come up lacking", "no matter what i achieve it never feels sufficient"], ["always falling short of an internal standard", "comparison always goes against me", "achievements don't close the gap"]] }
    ],
    l2: [
      [
        { titles: ["you hurt someone", "the harm you caused"],
          bodies: ["hurting someone — even unintentionally — is painful to sit with. shame says you're bad for doing it. guilt says you did a bad thing. guilt is more useful.", "the difference between remorse and shame is that remorse can lead to repair. shame usually just leads to hiding."],
          choiceSets: [["i hurt them intentionally", "i hurt them by accident or through negligence", "i don't think they know i hurt them"], ["knew what i was doing", "unintentional harm that i still feel responsible for", "carrying it alone without accountability"]] },
        { titles: ["you acted against your values", "did something that doesn't match who you want to be"],
          bodies: ["when you act against your own values, the shame points at a gap between who you are and who you want to be. that gap can close — it's not permanent.", "values-violation shame is a signal that something you care about got compromised. it's your own internal system flagging it."],
          choiceSets: [["i know it was wrong and i did it anyway", "i compromised on something i believe in", "i'm not sure if it was truly wrong or if i'm just being hard on myself"], ["deliberate values compromise", "gave in when i shouldn't have", "unclear if this is genuine shame or excessive self-criticism"]] },
        { titles: ["something embarrassing", "public or private embarrassment"],
          bodies: ["embarrassment-based shame is often about the fear of being seen as less-than in front of others.", "social shame about something embarrassing is connected to fear of how others see you now."],
          choiceSets: [["people saw it happen", "nobody saw but i can't stop thinking about it", "i'm afraid of who might find out"], ["public humiliation", "private shame nobody knows about", "fear of exposure"]] }
      ],
      [
        { titles: ["physical shame", "shame about your body"],
          bodies: ["body shame is almost always taught, not inherent. you were told or shown what an acceptable body looks like and yours didn't match.", "body shame often runs so deep that it feels like truth rather than something that was put there. it wasn't always there."],
          choiceSets: [["my size or shape", "something specific about how i look", "i've always felt this way about my body"], ["weight or build", "a specific feature or characteristic", "lifelong body shame"]] },
        { titles: ["identity shame", "shame about who you are at a fundamental level"],
          bodies: ["shame about identity — sexuality, gender, race, class, neurodivergence — is absorbed from environments that treated those things as lesser. it doesn't originate in you.", "identity shame is particularly insidious because it makes who you are the problem. it isn't."],
          choiceSets: [["sexuality or gender identity", "cultural background or class", "how my brain works or my mental health"], ["shame about sexual or gender identity", "shame about where i come from", "shame about how i'm neurologically wired"]] },
        { titles: ["shame about how you're wired", "something about your fundamental nature"],
          bodies: ["when shame is about your fundamental nature — how you think, feel, react — it's often shame about being 'too much' or 'not enough' of something.", "deep character or temperament shame often comes from early messages about what was acceptable."],
          choiceSets: [["i'm too sensitive or too emotional", "i'm not normal in some way", "i've never felt like i quite fit"], ["shame about emotional intensity", "shame about being different", "never quite belonging anywhere"]] }
      ],
      [
        { titles: ["shame about what happened to you", "carrying someone else's shame"],
          bodies: ["shame that belongs to what was done to you rather than what you did is misplaced. it migrated from the person who caused harm to you, which is unjust on top of the original harm.", "survivors absorbing perpetrators' shame is one of the most common and least fair dynamics in trauma."],
          choiceSets: [["i know logically it wasn't my fault but i still feel it", "i blame myself for not stopping it", "i'm ashamed of the experience itself"], ["knowing vs. feeling — logic says not my fault but shame says otherwise", "self-blame for not preventing it", "ashamed of the thing that happened"]] },
        { titles: ["you feel like you should have stopped it", "taking responsibility for someone else's actions"],
          bodies: ["thinking you should have prevented something done to you is almost always a survival mechanism — if it was somehow your fault, you could have controlled it. that's not true, but it's a way of making an out-of-control experience feel controllable.", "self-blame in the face of violation often looks like taking responsibility. it's actually a protection against the much more terrifying conclusion: that you were powerless and it still happened."],
          choiceSets: [["i think i could have done something to prevent it", "i stayed when i could have left", "i didn't react the way i 'should' have"], ["self-blame for not acting differently", "stayed in the situation", "my response to it isn't what i think it should have been"]] },
        { titles: ["you blame yourself for something done to you", "it wasn't yours to carry"],
          bodies: ["taking on the fault for something that someone else did is profoundly unfair. but shame doesn't follow logic — it follows the path of least resistance, which is often inward.", "the instinct to find your own fault in what happened to you is usually about trying to make sense of something that makes no sense."],
          choiceSets: [["i wonder what i did to deserve it", "i've convinced myself it was my fault", "i'm ashamed of myself for what happened"], ["searching for how i caused it", "fully internalized the fault", "ashamed of myself because of what someone else did"]] }
      ],
      [
        { titles: ["always falling short", "chronic insufficiency"],
          bodies: ["when the not-enough feeling is constant, it's not about any particular performance — it's an internalized standard that keeps moving.", "chronic 'not enough' is usually a message you received early and have been living inside of ever since."],
          choiceSets: [["i've always had high standards i can't meet", "i grew up being told i needed to do better", "i don't know where it came from but it's always been there"], ["high internal bar that keeps moving", "external origin — was taught this about myself", "always been there without a clear source"]] },
        { titles: ["comparison always goes against you", "everyone else seems like more"],
          bodies: ["comparison-based shame is your measure of yourself against a highlight reel of other people. the contest is rigged.", "when you compare your insides to other people's outsides, you'll always come up short. that's the structure of the comparison, not evidence of actual inferiority."],
          choiceSets: [["other people seem to have it more together", "i feel behind or lesser compared to people i know", "even people i don't respect make me feel inadequate"], ["looking at others and seeing my own deficits", "peers making me feel behind", "comparison makes me feel lesser even with people i don't want to be"]] },
        { titles: ["achievements don't close the gap", "success doesn't fix the feeling"],
          bodies: ["when success doesn't resolve the not-enough feeling, it means the shame isn't about performance — it's about something deeper that performance can't touch.", "if completing things or succeeding doesn't make the shame go away, the shame isn't actually about the outcomes."],
          choiceSets: [["i accomplish things and still feel the same", "i get external validation but it doesn't land", "i think i need to do more but doing more never helps"], ["achievement doesn't register internally", "external validation doesn't penetrate the shame", "the bar rises as fast as performance does"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need most right now?", "what would help?"],
        bodies: ["shame about something you did is heavy. what's most useful to take from this?", "action-based shame needs somewhere to go. what fits for you?"],
        choiceSets: [["how to make it right if i can", "how to forgive myself even if i can't", "that feeling bad doesn't make me a bad person"], ["repair path if one exists", "self-forgiveness path", "separating the action from my identity"]] },
      { titles: ["what would help most right now?", "what do you need?"],
        bodies: ["identity shame goes deep. what's most useful to take from this?", "shame about who you are needs a specific kind of response. what fits?"],
        choiceSets: [["just to have this acknowledged as real pain", "that nothing about who i am is shameful", "how to start loosening shame's grip on my identity"], ["acknowledgment", "that my identity is valid", "a starting point for working on this"]] },
      { titles: ["what do you need from this?", "what fits most right now?"],
        bodies: ["shame that isn't yours is one of the heaviest things to carry. what would be most useful?", "misplaced shame needs somewhere to go. what fits?"],
        choiceSets: [["someone to say clearly: this isn't your fault", "how to start returning the shame to where it belongs", "whether talking to someone would help"], ["clear, direct: not your fault", "how to stop internalizing others' responsibility", "whether professional support makes sense"]] },
      { titles: ["what do you need most?", "what would help?"],
        bodies: ["chronic insufficiency shame is exhausting. what's most useful to take from here?", "the not-enough feeling has been there a long time. what fits?"],
        choiceSets: [["where this comes from", "how to live with less of it", "whether it's possible to actually change it"], ["understanding the origin", "practical relief", "whether change is possible"]] }
    ],
    finals: [
      { titles: ["you're not bad — you did a bad thing. there's a difference", "shame says you're the problem. guilt knows it was the action"],
        bodies: ["shame takes a thing you did and turns it into a statement about who you are. that transfer is the problem. what you did was wrong — or at least not okay. that's real. but it doesn't mean you are fundamentally wrong or not okay. those are different claims.", "the path through action-based shame isn't self-punishment — it's repair where possible, honesty with yourself, and the harder work of understanding why it happened so it doesn't again. shame just makes you hide. guilt can make you change."],
        tips: ["if you hurt someone and repair is possible, do it. a genuine apology without defensiveness is more healing for you than it might even be for them", "separate 'i did a bad thing' from 'i am bad'. the first is true. the second is a story you're telling", "ask: what would i say to a friend who did the same thing? then say that to yourself", "if you genuinely can't make it right, work on understanding what led to it — not to excuse it, but to make sure you understand yourself well enough to do differently"] },
      { titles: ["nothing about who you are is shameful", "identity shame is something that was put there — you didn't come with it"],
        bodies: ["shame about your identity — your body, your sexuality, your background, your neurology, the way you're fundamentally wired — almost never originates in you. it was taught. through looks, comments, comparisons, systems, and environments that decided certain things were lesser. that decision was not yours and it was not true.", "unlearning identity shame is slow work because it goes deep and it's been there long. but 'it's been there long' doesn't make it accurate. it makes it familiar. those are different things."],
        tips: ["find communities of people who share the part of your identity you feel most shame about. representation changes what feels possible", "notice when the shame voice speaks and whose voice it actually sounds like. often it's not yours", "you are not obligated to feel okay about your identity overnight — or ever on a deadline. but you deserve to be working toward it", "therapy that specializes in identity and shame (affirmative therapy, somatic work) is often more helpful than general support for this specifically"] },
      { titles: ["what happened to you isn't yours to carry", "the shame migrated. you can send it back."],
        bodies: ["when something is done to you, the shame that comes with it belongs to the person who did it. that transfer to you — which is real and common — is one of the most unjust parts of trauma. you didn't earn this shame. it landed on you without your consent.", "the work of returning misplaced shame is slow and it requires support. you don't have to do it alone, and you don't have to fully understand it before starting. you just have to start with: this was not my fault."],
        tips: ["say it plainly, to yourself: what happened to me was not my fault. not as a platitude — as a statement you're making real through repetition", "trauma therapy (EMDR, somatic experiencing, trauma-focused CBT) specifically addresses the shame patterns that come from being hurt", "find one person you trust enough to tell a version of what happened to. shame survives on secrecy. telling changes the shape of it", "you don't owe anyone an explanation for why you feel the way you feel about it. your experience is valid without being justified"] },
      { titles: ["the 'not enough' was taught, not discovered", "chronic shame isn't a verdict — it's a wound"],
        bodies: ["the feeling of perpetual inadequacy didn't just appear — it was installed. by families, schools, comparisons, cultures that defined worth narrowly and held it over people. you absorbed it early enough that it feels like your own voice. it isn't.", "the gap between who you are and who you 'should' be doesn't close through achievement. it's not an achievement problem. it's a shame problem. the shame sets the bar and then raises it. the only way to stop the chase is to question the bar itself."],
        tips: ["start tracking when the 'not enough' voice speaks. notice what triggers it. that trigger is a pointer to where the original message came from", "ask: enough for whom? enough by whose standard? often the answer reveals the source is not actually yours", "achievements are worth celebrating even when they don't fix the shame. celebrate them anyway — for the action, not as a cure", "therapy focused on self-worth and early messaging is often transformative for chronic shame. it can change. not overnight — but it can."] }
    ]
  },

  grief: {
    root: {
      titles: ["what are you grieving?", "what's the loss?"],
      bodies: ["grief comes in more forms than most people acknowledge. let's figure out what kind this is.", "loss takes many shapes. let's find what's at the center of this."],
      choiceSets: [
        ["someone died", "a relationship ended", "a future i was counting on", "something i can't fully name"],
        ["i'm mourning a death", "a relationship is over", "a version of my life that won't happen", "grief without a clear subject"]
      ]
    },
    l1: [
      { titles: ["who did you lose?", "tell me about them"],
        bodies: ["death grief is its own category. there are no shortcuts through it — only through.", "losing someone to death is one of the hardest human experiences. there's no right way to do it."],
        choiceSets: [["someone very close to me", "someone i had a complicated relationship with", "someone i didn't get to say goodbye to"], ["my closest person", "a complicated relationship that ended with death", "no closure — they were just gone"]] },
      { titles: ["which relationship ended?", "what kind of loss?"],
        bodies: ["relationship endings are their own grief, often underestimated because the person is still alive. the loss is of what was, what could have been, and the future you imagined.", "romantic and close friendship endings are real grief, full stop — even when everyone keeps asking 'are you over it yet?'"],
        choiceSets: [["a romantic relationship", "a close friendship", "a family relationship"], ["partnership or romantic love", "someone who was my best friend", "family relationship that ended or changed"]] },
      { titles: ["what future are you grieving?", "what didn't happen?"],
        bodies: ["grieving a future that didn't happen is underacknowledged — but it's real. you lost something that never existed, which somehow makes it both less and more disorienting.", "the loss of a life you expected, a career path, a version of yourself — these are real losses even without a physical absence."],
        choiceSets: [["a relationship future that collapsed", "a career or life path that closed", "a version of myself that i lost"], ["the future of a relationship", "professional or life-path future", "the person i thought i'd become"]] },
      { titles: ["grief without a clear subject", "something is gone but you can't name it"],
        bodies: ["unnamed grief is still grief. sometimes you grieve the accumulation — a thousand small things, the passage of time, a sense of something slipping away.", "grief that doesn't have a clear object is often about intangibles: a time of life, a feeling, a sense of possibility."],
        choiceSets: [["a time in my life that's gone", "a feeling i can't get back", "a sense of possibility or wonder that's faded"], ["a chapter of my life that ended", "an experience or feeling i'll never have again", "youth, possibility, or some version of hope"]] }
    ],
    l2: [
      [
        { titles: ["your closest person", "the loss at the center of everything"],
          bodies: ["losing your closest person disrupts not just the relationship but your entire way of orienting. they were part of how you understood your world.", "the grief for a closest person doesn't follow any timeline anyone gives you. ignore those timelines."],
          choiceSets: [["they were the center of my daily life", "they were who i called when things happened", "the world without them doesn't make sense yet"], ["organized my life around them", "my first call for everything, now gone", "the world's shape has changed fundamentally"]] },
        { titles: ["a complicated relationship", "grief mixed with other feelings"],
          bodies: ["grief for someone you had a complicated relationship with is harder in some ways — because it's grief mixed with unresolved things, things left unsaid, maybe relief alongside sadness.", "complicated grief doesn't follow the scripts. it's messier and often lonelier because it's harder to explain to others."],
          choiceSets: [["my feelings about them were mixed even before", "we had unfinished business", "grief and relief are both there and that feels complicated"], ["ambivalent relationship before the loss", "things i never got to say or resolve", "mixed emotions that feel confusing"]] },
        { titles: ["no goodbye", "they were just gone"],
          bodies: ["no goodbye means the grief starts without closure and the missing them starts alongside the disbelief. it's a different kind of hard.", "sudden loss doesn't give you time to prepare, which means the initial grief can be particularly disorienting."],
          choiceSets: [["it was sudden — no time to prepare", "i didn't get to say what i wanted to say", "the last time i saw them wasn't the goodbye i'd want"], ["no warning, no preparation", "things left unspoken", "last interaction wasn't how i wanted to leave it"]] }
      ],
      [
        { titles: ["a romantic relationship ended", "love that's over"],
          bodies: ["the end of a romantic relationship is grief — for the person, for the shared life, for the future you were building, for a version of yourself that existed in that relationship.", "people underestimate romantic grief because the person is still alive. but the relationship, the daily life, the future — those are genuinely gone."],
          choiceSets: [["the relationship ended and i still love them", "it ended badly and the grief is mixed with anger", "i ended it but i'm still grieving it"], ["still love them, they're just gone from my life", "complicated ending with hurt on both sides", "grief even though i chose to leave"]] },
        { titles: ["a close friendship ended", "losing someone who wasn't a partner but was essential"],
          bodies: ["losing a close friend is often treated as less serious than losing a romantic partner. it isn't. deep friendships are irreplaceable and their endings are real grief.", "friend grief gets less social support but it's not less real."],
          choiceSets: [["a falling out that ended things", "we just drifted and i miss them", "they chose someone else over our friendship"], ["conflict that ended it", "slow drift until the friendship was gone", "felt like i was replaced or deprioritized"]] },
        { titles: ["a family relationship that ended or changed", "family grief"],
          bodies: ["when a family relationship ends or fundamentally changes — estrangement, death, a major rift — the grief is complicated by history, expectation, and identity.", "family grief often comes with additional layers: what it says about you, what it means for other relationships, the loss of who you thought they were."],
          choiceSets: [["estrangement — we no longer talk", "someone died and the family relationship with them is what i'm grieving", "the relationship changed irrevocably and i'm mourning what it was"], ["chosen or unchosen estrangement", "death that ended a family relationship", "the relationship is still there but it's different and i grieve the old version"]] }
      ],
      [
        { titles: ["the future of a relationship that's gone", "a life you imagined together"],
          bodies: ["grieving the future of a relationship means you're mourning things that never happened — conversations, milestones, growing old together. it's particularly disorienting because the loss is invisible.", "the life you imagined is as real emotionally as a life you lived. losing it deserves grief."],
          choiceSets: [["the future i planned with someone specific", "what we would have built together", "who i would have been with them"], ["specific future imagined with a specific person", "the shared life that won't happen", "the version of myself that only existed with them"]] },
        { titles: ["a career or life path that closed", "the path that didn't open"],
          bodies: ["when a career, life path, or major goal closes — through circumstance, choice, or something taken from you — the grief is for who you would have been, as much as for the thing itself.", "professional and path grief is underacknowledged. it's treated like 'just move on to the next thing'. the loss of a path is real."],
          choiceSets: [["a dream career that isn't happening", "a life path that closed through circumstance", "something i worked toward that's not going to happen"], ["professional or vocational dream", "life direction that got blocked or foreclosed", "goal i invested in that won't come to pass"]] },
        { titles: ["a version of yourself you've lost", "mourning who you used to be or could have been"],
          bodies: ["grieving yourself — a former version, or a version that never got to exist — is one of the least acknowledged forms of grief. but it's real.", "when you grieve a lost version of yourself, you're mourning a whole life that would have been different."],
          choiceSets: [["a healthier or happier version of myself", "who i could have been if things had gone differently", "the person i used to be before something changed me"], ["a past self i want back", "the self i could have been", "the self i was before everything changed"]] }
      ],
      [
        { titles: ["grieving a chapter of life", "a time that's gone"],
          bodies: ["grieving a period of your life — childhood, a particular time, an era — is real grief for something that can never be returned to.", "nostalgia that carries sadness is often grief for a lost time."],
          choiceSets: [["childhood or youth", "a specific period of my life that was better", "a time before something happened that changed everything"], ["early life and what it contained", "a period i can't return to", "before something fundamentally changed my world"]] },
        { titles: ["a feeling that's gone", "something intangible you've lost"],
          bodies: ["grieving a feeling — safety, wonder, hope, lightness — is grief for an interior experience that you may not know how to get back.", "losing an inner state — the feeling of being light, of things being possible — is a real loss."],
          choiceSets: [["the feeling of safety or security", "a sense of wonder or possibility", "lightness or joy that was just part of who i was"], ["emotional safety that's gone", "wonder or optimism i used to have", "a lightness i can't access anymore"]] },
        { titles: ["sense of possibility that's faded", "something about hope or the future"],
          bodies: ["when the sense that the future is open, that things can be different, that good things are still possible — when that fades, that's its own specific grief.", "losing hope as a feeling is disorienting because it affects how you see everything else."],
          choiceSets: [["i used to believe things could get better", "i've lost faith in the future", "i don't feel hope the way i used to"], ["lost the basic sense that it gets better", "future feels closed or fixed", "hope as a feeling has gone quiet"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need most right now?", "what would help?"],
        bodies: ["you're grieving a death. what's most useful to take from this?", "death grief is its own territory. what fits for where you are?"],
        choiceSets: [["just to be heard in this pain", "how to survive the early part", "whether what i'm feeling is normal"], ["to be seen in this", "how to get through the worst of it", "validation that my grief is appropriate"]] },
      { titles: ["what do you need from this?", "what fits most?"],
        bodies: ["you're grieving a relationship that ended. what's most useful?", "relationship grief needs somewhere to land. what fits?"],
        choiceSets: [["just to have this acknowledged as real grief", "how to move through it without rushing it", "how to stop loving someone who's gone"], ["it's real even if they're still alive", "permission to take the time i need", "how to disentangle when i still care"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["you're grieving a future that didn't happen. what's most useful?", "the grief for an unlived life needs acknowledgment. what fits?"],
        choiceSets: [["to have this counted as real loss", "how to build toward a new future from here", "how to stop mourning what didn't happen"], ["validation that this is a real thing to grieve", "how to move forward", "how to stop being stuck in the unlived version"]] },
      { titles: ["what do you need right now?", "what fits best?"],
        bodies: ["unnamed grief is its own thing. what's most useful to take from this?", "grief without a clear subject still deserves care. what fits?"],
        choiceSets: [["just to have it acknowledged that something is lost", "how to grieve something intangible", "whether something more specific might be underneath this"], ["acknowledgment of real loss even without a name", "how to process something you can't point to", "whether there's a more concrete grief underneath"]] }
    ],
    finals: [
      { titles: ["grief is the price of love — and it's worth it", "there is no right way to do this"],
        bodies: ["losing someone to death is one of the most profound human experiences, and there are no shortcuts through it. the grief is proportional to the love, which means it's supposed to be this hard. that's not a malfunction. that's what love costs, and it was worth paying.", "the early stages of death grief can feel unsurvivable. they are survived — by people who felt exactly what you're feeling. the grief doesn't go away but it changes shape. it becomes something you carry differently over time."],
        tips: ["let people sit with you even when you can't talk. presence helps even when nothing can be said", "grief has no timeline despite what people imply. a year is not 'long enough'. some grief lives with you forever in a different form", "preserve them — talk about them, keep things that mattered, say their name. grief doesn't require you to let go of the person", "if the grief is making daily functioning impossible for an extended period, grief therapy is specifically useful — not to rush you, but to support you through it"] },
      { titles: ["relationship grief is real grief — even when they're still alive", "you're allowed to mourn this"],
        bodies: ["the end of a relationship is real grief, even though the person didn't die. you lost the daily life you had with them, the future you imagined, a version of yourself that only existed in that relationship. that's a lot of loss stacked together. it deserves real grieving.", "people often feel like relationship grief should move faster because the person is still alive and they might be 'fine'. none of that changes what you lost. your grief is on its own timeline."],
        tips: ["stop checking their social media. it keeps you in a relationship that has ended and makes the grief much longer", "let yourself go through the full mourning — the denial, the bargaining, the anger. don't skip stages by being 'mature' about it", "the goal isn't to stop loving them — it's to eventually be okay with loving someone who is no longer in your daily life", "social support specifically for breakups or friend losses helps. it's easy to feel like 'it's not that serious'. let people support you"] },
      { titles: ["an unlived future is a real loss", "you're allowed to grieve what didn't happen"],
        bodies: ["the loss of a future — a relationship that would have been, a career that didn't open, a version of yourself that won't get to exist — is real loss. the fact that it never happened doesn't make it less real to grieve. you had invested in that future emotionally. it mattered.", "grieving an unlived future is disorienting because there's nothing to point to, no grave, no date it ended. but the investment was real and the loss is real and the grief is appropriate."],
        tips: ["allow yourself to mourn the specific version — what exactly it would have looked like. the more concrete the mourning, the more it processes", "at some point, the unlived future needs to give way to the actual life in front of you. that's not betrayal — it's survival", "ask: what parts of what i wanted can still be found, just differently? the same values or experiences might be available through a different path", "therapy for grief about what 'could have been' is particularly useful — it often connects to core beliefs about what you deserve"] },
      { titles: ["grief without a name is still grief", "you don't need a subject to be allowed to mourn"],
        bodies: ["unnamed grief — for a time, a feeling, a sense of who you were, the feeling of possibility — is real grief. you're not being melodramatic. something is gone that mattered, and you're missing it. that's allowed.", "the hardest part of unnamed grief is that there's nothing to point to. no event, no person, no clear loss. just absence where something used to be. that's worth taking seriously even without a name for it."],
        tips: ["try to name it as specifically as you can — not to give it a label but to get it out of abstraction and into something you can actually address", "look for when the feeling is strongest. what triggers it? what times? what places? the pattern is a pointer", "give yourself permission to mourn without needing to justify it to anyone — including yourself", "if this grief has been sitting for a long time, consider whether therapy might help you find and process what's actually underneath it"] }
    ]
  },

  burnout: {
    root: {
      titles: ["what's burned you out?", "where's the depletion coming from?"],
      bodies: ["burnout is always about sustained output without enough recovery. let's find the source.", "your system ran on empty for too long. let's figure out what's been draining it."],
      choiceSets: [
        ["work or school", "taking care of others", "something i used to love has died", "i'm just completely empty"],
        ["professional or academic grind", "caretaking depleted me", "passion that faded out", "total depletion across everything"]
      ]
    },
    l1: [
      { titles: ["what's the work or school situation?", "what's the grind been like?"],
        bodies: ["work and school burnout is about sustained high output in an environment that doesn't give back enough to replenish what it takes.", "the grind that doesn't let up eventually depletes reserves you didn't know you were spending."],
        choiceSets: [["too much for too long with no break", "the environment itself is the problem", "i've stopped caring about it and that scares me"], ["relentless pressure without recovery", "the place itself is depleting", "the caring turned off"]] },
      { titles: ["who have you been taking care of?", "what's the caretaking situation?"],
        bodies: ["caretaking burnout is what happens when you pour out constantly without anything pouring back in.", "when you're the person everyone leans on, there's often no permission to say 'i'm running low'."],
        choiceSets: [["a family member who needs a lot from me", "i'm the emotional support for everyone around me", "i've been putting others first for so long i don't remember who i am"], ["caring for someone with significant needs", "emotional anchor for everyone, no anchor for me", "selfhood got lost in service to others"]] },
      { titles: ["what did you lose passion for?", "what used to light you up?"],
        bodies: ["losing passion for something you used to love is one of the specific sadnesses of burnout. it's not just tired — it's grief.", "when the thing that used to carry meaning goes flat, it's not just burnout from the outside — something inside has changed too."],
        choiceSets: [["work i used to actually love", "a creative pursuit or hobby", "a relationship or cause i believed in"], ["my profession used to mean something", "a passion or creative thing that went dead", "something i was committed to that lost its charge"]] },
      { titles: ["how empty are you?", "what does total depletion feel like?"],
        bodies: ["total burnout — where everything is depleted at once — is its own category. it's not just one area being exhausted, it's the whole system.", "when every resource feels spent, it's usually been building across multiple areas for a long time."],
        choiceSets: [["emotionally, physically, and mentally all at once", "i don't care about anything right now", "i'm functioning but barely and don't know how much longer"], ["across the board depletion", "caring capacity has completely shut off", "functional but on the edge of not"]] }
    ],
    l2: [
      [
        { titles: ["relentless pressure without recovery", "too much for too long"],
          bodies: ["sustained output without recovery is what burns people out. the issue isn't any single demand — it's the absence of genuine replenishment between them.", "burnout math: if output exceeds input for long enough, the account goes to zero and then into debt."],
          choiceSets: [["the demands never stop", "i work or study constantly and can't step back", "there's no off switch"], ["the pace never lets up", "constant without break", "no real rest built into the system"]] },
        { titles: ["the environment itself is the problem", "it's not just volume — it's the place"],
          bodies: ["when the environment is toxic, unhealthy, or misaligned with your values, no amount of self-care can fully compensate.", "environmental burnout requires environmental change, not just better coping."],
          choiceSets: [["the culture or leadership is bad", "i feel unseen or undervalued where i am", "there's constant conflict or dysfunction"], ["systemic issues in the environment", "invisible or devalued despite effort", "dysfunctional systems around me"]] },
        { titles: ["the caring turned off", "you stopped caring and that's alarming"],
          bodies: ["when caring turns off about something that used to matter to you, that's a significant signal — not just fatigue but a protective shutdown.", "the inability to care anymore is the body and mind saying 'we're done here'. it's a real signal."],
          choiceSets: [["i don't care about outcomes anymore", "i go through the motions but nothing registers", "i'm alarmed that i stopped caring"], ["outcomes are indifferent to me now", "present but checked out", "the caring absence itself is scary"]] }
      ],
      [
        { titles: ["caring for someone with high needs", "significant caregiving demands"],
          bodies: ["caregiving for someone with significant needs is one of the most depleting forms of sustained effort because it's often invisible, relentless, and emotionally charged.", "caregiver burnout is real and underacknowledged. you're allowed to be depleted by this."],
          choiceSets: [["a family member who is ill or needs constant support", "i'm the only one available or willing to help", "i love them but it's taking everything"], ["medical or disability caregiving", "sole or primary caregiver without backup", "love and depletion simultaneously"]] },
        { titles: ["emotional support for everyone", "everyone's anchor, no anchor for you"],
          bodies: ["being the person everyone turns to feels meaningful until it becomes unsustainable. and it always eventually becomes unsustainable without reciprocity.", "emotional anchoring depletes even more than practical caregiving because there's no visible output — just continuous giving."],
          choiceSets: [["friends and family all come to me with their problems", "i help everyone but no one checks on me", "i'm so used to supporting others i don't know how to receive it"], ["emotional support dispenses without reciprocity", "everyone's listener, no one's listening to me", "support-giving so habitual i can't receive it anymore"]] },
        { titles: ["lost yourself in service to others", "your identity got absorbed"],
          bodies: ["when your sense of self disappears into the role of caretaker, you lose yourself gradually and then one day realize you don't know who you are without the role.", "selfhood dissolving into service to others is a specific kind of loss."],
          choiceSets: [["i don't know what i want because i've only thought about what others need", "my identity is tied to being needed", "i'm scared of who i'd be if i didn't have to take care of anyone"], ["disconnected from own wants and needs", "being needed as an identity", "identity depends on the caretaking role"]] }
      ],
      [
        { titles: ["a profession that used to mean something", "work you once loved"],
          bodies: ["losing the meaning that used to make work worthwhile is its own grief. the work is the same — something inside isn't.", "vocational passion dying out is a specific kind of burnout that hits harder because the thing you were doing for love becomes just a thing you're doing."],
          choiceSets: [["i got into this because i cared about it", "the meaning got ground out by the reality", "i don't know if it can come back"], ["chose it for meaning, lost the meaning", "systemic grind eroded the care", "not sure if this is reversible"]] },
        { titles: ["a creative passion that went flat", "a hobby or pursuit that lost its charge"],
          bodies: ["when creative or leisure pursuits burn out, it's usually from over-pressurizing them — turning play into performance, making the thing that recharged you into another obligation.", "hobbies and passions burn out when they stop being chosen and start being required."],
          choiceSets: [["something i did for fun became work", "pressure to be good at it killed it", "i can't tell if i hate it now or just need a break"], ["play became obligation", "performance pressure killed the joy", "can't tell if it's over or just needs rest"]] },
        { titles: ["a cause or relationship lost its charge", "something you believed in went dim"],
          bodies: ["when commitment to something you believed in — a cause, a relationship, an ideal — fades, the grief is about the loss of meaning that was attached to it.", "losing faith in something you were working toward is demoralizing in a specific way."],
          choiceSets: [["something i was fighting for doesn't feel worth it", "a relationship i was invested in lost its meaning to me", "the belief that sustained me has gone quiet"], ["lost faith in a cause", "investment in a relationship that's now empty", "animating belief has faded"]] }
      ],
      [
        { titles: ["emotionally, physically, mentally all at once", "across the board depletion"],
          bodies: ["total burnout hitting every dimension at once is serious. it means the entire system has been running on empty without adequate refueling.", "when all resources are gone simultaneously, the recovery time is longer and the risk of collapse is real."],
          choiceSets: [["i can barely get out of bed", "i'm doing the minimum to survive", "i don't know how i'm still going"], ["physical and emotional collapse is close", "survival mode only", "sheer momentum keeping me going"]] },
        { titles: ["caring capacity shut off", "you don't care about anything right now"],
          bodies: ["caring about nothing is the system's protective shutdown when everything has demanded care for too long.", "not caring — about things that mattered, about people, about yourself — is what happens when emotional resources hit absolute zero."],
          choiceSets: [["nothing feels worth caring about", "people notice i've changed and they're right", "i want to care and can't access it"], ["pervasive indifference", "visible change that others see", "the desire to care is there but the access isn't"]] },
        { titles: ["functional but barely", "running on fumes"],
          bodies: ["still functioning while completely depleted is its own extreme cost — you're spending reserves you don't have.", "when you're barely functional but still managing external demands, the crash is usually coming and it will be significant."],
          choiceSets: [["doing just enough to keep things together", "i'm scared of what happens when i stop", "i know something has to change but don't know what"], ["minimum viable functioning", "fear of what happens when the holding-on stops", "change is necessary but the path isn't clear"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need most?", "what would help right now?"],
        bodies: ["work or school burned you out. what's most useful to take from this?", "the grind broke something. what fits for where you are?"],
        choiceSets: [["how to survive the current situation", "whether i need to make a bigger change", "how to actually recover not just cope"], ["immediate survival strategies", "whether this requires structural change", "real recovery vs. just managing it"]] },
      { titles: ["what do you need right now?", "what fits most?"],
        bodies: ["caretaking burned you out. what's most useful?", "you've given everything. what do you need?"],
        choiceSets: [["permission to have needs of my own", "how to reduce the load without abandoning them", "how to find myself again"], ["just permission to need things", "a sustainable version of this", "reconnecting to my own identity"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["passion burnout is its own grief. what's most useful to take from this?", "something that used to light you up went dark. what fits?"],
        choiceSets: [["whether it can come back", "how to grieve if it can't", "what to do now that it's gone"], ["whether this is permanent or reversible", "grief for a lost passion", "what to orient toward now"]] },
      { titles: ["what do you need most right now?", "what would help?"],
        bodies: ["total depletion is serious. what's most useful to take from this?", "you're running on nothing. what fits?"],
        choiceSets: [["immediate relief, even if temporary", "whether i need to stop something significant", "how to start recovering"], ["something that helps right now", "whether a bigger intervention is needed", "the first step toward actual recovery"]] }
    ],
    finals: [
      { titles: ["you've been running on empty and it caught up with you", "burnout isn't weakness — it's the bill arriving"],
        bodies: ["burnout is what happens when sustained output isn't matched by adequate recovery over a long enough period. it's not a character flaw. it's the logical endpoint of a system that kept giving without being refueled. you didn't fail — the system failed you, or the situation did.", "the way out of burnout isn't more willpower or better time management. it requires actual rest, reduced load, and something that fills you back up. that sounds obvious but it goes against everything the grind culture says."],
        tips: ["identify the specific thing taking the most without giving back. that's the first thing to address", "recovery from burnout is measured in weeks and months, not days. set that expectation with yourself and others", "genuine rest is not scrolling. it's not passive media consumption. it's actual empty time with no demands", "if you can't reduce the load unilaterally, have a direct conversation about it. most people respond to honest 'I'm at capacity' better than they do to watching someone collapse"] },
      { titles: ["you can't pour from an empty cup — and your cup is empty", "caretaking yourself isn't selfish, it's necessary"],
        bodies: ["you've been giving to others — possibly for a very long time — without equivalent replenishment. that's not sustainable for any human, including you. the depletion you feel isn't weakness. it's the natural result of an imbalanced system. you matter too. your needs count too. that's not selfishness — it's basic sustainability.", "caretaking from depletion eventually means you have nothing genuine left to give — which doesn't serve the people you're caring for either. filling yourself back up isn't abandonment. it's how you stay available."],
        tips: ["identify one thing you've been doing for others that you can reduce or ask for help with. even small reductions matter", "accept help when it's offered. practice saying yes even when you're used to being the one offering", "reconnect with one thing that's just for you — not productive, not for anyone else, just something that refills you", "if you've been caretaking for a long time, therapy can help you figure out who you are outside the role — which is often more disorienting than it sounds"] },
      { titles: ["passion burnout is real grief — the thing didn't leave, but the feeling did", "what you lost might come back — but not by forcing it"],
        bodies: ["losing passion for something you once loved is a specific kind of loss. it's not that you changed your mind — it's that something that used to feel alive went quiet. this often happens when the thing got over-pressurized, turned into a performance, or got associated with obligation rather than choice.", "passion rarely returns through direct pursuit when you're burned out. it usually comes back through rest, distance, and letting yourself approach the thing differently — or not at all for a while."],
        tips: ["give yourself full permission to take a break from the thing — even if it's your job. distance changes the relationship", "if it's your career, the passion might need to be separated from your livelihood temporarily to recover", "approach the thing in tiny doses without expectations — not to enjoy it, just to see what happens", "ask what you loved about it originally. the feeling might be accessible through a different avenue, even if not through the original thing"] },
      { titles: ["total burnout means total recovery — not a patch job", "you need real rest, not better coping"],
        bodies: ["when burnout is total — emotional, physical, mental — the recovery can't be managed around the edges. something significant has to change. the system needs to actually be taken offline for a while, not just run more efficiently.", "total depletion isn't an optimization problem. it's a signal that the current structure is not sustainable and needs to change. the harder decision — usually the more courageous one — is to actually change the structure, not find a way to survive it longer."],
        tips: ["something has to actually stop — not be managed better, but stop. identify what that is", "physical recovery is the foundation. sleep, real food, movement. the mind can't recover if the body is still depleted", "this is the situation where talking to a doctor or therapist is genuinely warranted — not as a last resort but as a first step", "allow the recovery to be slower than you think is reasonable. burnout takes longer to recover from than people expect, and expecting quick recovery just becomes another demand"] }
    ]
  },

  fear: {
    root: {
      titles: ["what are you afraid of?", "where's the fear sitting?"],
      bodies: ["fear is always about something. let's figure out what.", "your system is in threat mode. let's find what it's pointed at."],
      choiceSets: [
        ["something specific i can name", "something vague i can't fully articulate", "losing something or someone", "something about myself"],
        ["a concrete, nameable thing", "a general dread without a clear target", "fear of loss", "fear that's turned inward"]
      ]
    },
    l1: [
      { titles: ["what's the specific fear?", "what can you name?"],
        bodies: ["named fear is workable fear. having a specific thing to address is already progress.", "the fact that you can name it means you can work with it."],
        choiceSets: [["a specific situation or event", "a specific person or relationship", "a specific outcome i'm terrified of"], ["something happening in my life concretely", "fear tied to a specific relationship", "a specific scenario i dread"]] },
      { titles: ["what does the vague fear feel like?", "what's the dread about?"],
        bodies: ["vague, ambient fear is often about a general sense of threat that hasn't crystallized into anything specific. that's harder to work with but still valid.", "when fear is unspecified, it's often threat detection running without a clear target — your system sensing danger without knowing exactly what."],
        choiceSets: [["general dread about the future", "a sense something bad is coming", "fear with no clear object — just underlying terror"], ["future-oriented diffuse fear", "impending doom with no specific source", "free-floating anxiety that feels like fear"]] },
      { titles: ["what might you lose?", "what are you afraid of losing?"],
        bodies: ["fear of losing something — a person, a situation, an identity — is one of the most common and most powerful kinds of fear.", "the more something matters to you, the more terrifying losing it feels. that's not weakness — that's caring."],
        choiceSets: [["a person i love", "my health or security", "my sense of who i am or my place in the world"], ["fear of losing someone", "fear of losing health, safety, or stability", "fear of losing identity or life structure"]] },
      { titles: ["what about yourself are you afraid of?", "what scares you about you?"],
        bodies: ["fear turned inward is its own category — fear of your own thoughts, reactions, potential, or what you might do or become.", "self-directed fear is often about a loss of control or confidence in who you are."],
        choiceSets: [["something i might do or say", "who i might become", "my own mental health or stability"], ["fear of acting in ways i don't want to", "fear of becoming someone i don't recognize", "fear of what's happening in my own mind"]] }
    ],
    l2: [
      [
        { titles: ["a situation or event", "something happening concretely"],
          bodies: ["concrete situational fear is the most workable kind — because there's a specific thing to think about, prepare for, or avoid.", "when fear is tied to a specific situation, you can look at it directly and decide what to do with it."],
          choiceSets: [["it's happening soon", "it might happen in the future", "i'm not sure if it will happen or not"], ["imminent fear", "anticipatory fear about something possible", "uncertain whether the feared thing will actually occur"]] },
        { titles: ["a relationship that scares you", "fear tied to a person"],
          bodies: ["relationship-based fear is often about unpredictability — you can't fully control what another person will do, which makes them a source of uncertainty.", "fear within a specific relationship might be about the person, or about what losing them would mean."],
          choiceSets: [["what they might do", "losing them", "what they think of me"], ["fear of their behavior or actions", "fear of losing the relationship", "fear of their judgment or rejection"]] },
        { titles: ["a specific outcome you dread", "the thing you're most scared of happening"],
          bodies: ["specific outcome fear is often more manageable once you've looked directly at it — what exactly would happen, and then what?", "the feared outcome often feels catastrophic until you walk through what you'd actually do if it happened."],
          choiceSets: [["failing at something important", "losing everything i've built", "something happening to someone i love"], ["failure fear", "loss of stability or life structure", "harm coming to someone else"]] }
      ],
      [
        { titles: ["future-oriented dread", "scared of what's coming without knowing what"],
          bodies: ["diffuse future dread is anxiety's version of fear — it doesn't have a target but it feels like threat. the nervous system is signaling danger without knowing exactly what to point at.", "when fear is about the future generally, it's often about a lack of control over what's coming."],
          choiceSets: [["the future feels uncertain and unsafe", "i feel like something bad is coming", "i can't specify what i'm afraid of but the fear is real"], ["general future threat sense", "impending doom without a cause", "unnamed but real fear"]] },
        { titles: ["sense of impending doom", "something bad is coming"],
          bodies: ["the sense that something bad is coming — even without evidence — is a real experience even when there's nothing concrete causing it.", "impending doom feeling often comes from the nervous system being in a state of low-grade alert. something is keeping it activated."],
          choiceSets: [["it feels certain even though i can't explain it", "something in me keeps bracing for impact", "i've been in this state for a while"], ["certainty about something bad without evidence", "constant bracing", "sustained background dread"]] },
        { titles: ["free-floating terror", "fear without a clear object"],
          bodies: ["fear that attaches to no specific thing but feels constant is often your nervous system in a dysregulated state — not responding to a specific threat, just stuck in threat mode.", "free-floating fear is exhausting because there's nothing specific to address."],
          choiceSets: [["the fear is constant regardless of circumstances", "it spikes without clear triggers", "i've stopped trusting that i'm safe even when i am"], ["always there at low level", "unpredictable spikes", "lost access to felt safety"]] }
      ],
      [
        { titles: ["fear of losing someone", "terrified of losing a person"],
          bodies: ["fear of losing someone you love is directly proportional to how much they matter to you. the fear is the love looking ahead.", "loving someone means being vulnerable to losing them. the fear is the cost of that vulnerability."],
          choiceSets: [["they're healthy but i'm always scared something will happen", "they're going through something and i'm terrified", "we're in a relationship and i'm scared of losing them"], ["general fear of losing a healthy person", "fear while they're going through something difficult", "fear within a relationship of it ending"]] },
        { titles: ["fear of losing health or safety", "fear about your security or wellbeing"],
          bodies: ["health and safety fears go deep because they're about the body's survival — the most fundamental level of threat.", "fear about your own health or security taps into very basic survival programming."],
          choiceSets: [["something might be wrong with my health", "my financial or physical security feels threatened", "the world doesn't feel safe to me"], ["health anxiety", "security or stability threat", "general sense of unsafety in the world"]] },
        { titles: ["fear of losing identity or structure", "scared of your life coming apart"],
          bodies: ["fear of losing your sense of self, your life structure, your place in things — this is existential-level fear.", "identity and life-structure fear is about the future being unrecognizable, not just difficult."],
          choiceSets: [["everything falling apart at once", "losing who i am in the middle of change", "no longer knowing my place or purpose"], ["total life disruption fear", "self-concept threatened by change", "loss of structure and orientation"]] }
      ],
      [
        { titles: ["fear of something you might do", "afraid of your own actions"],
          bodies: ["fear of what you might do — lose control, hurt someone, act in ways you'll regret — is its own anxiety that deserves specific attention.", "the fact that you're afraid of acting badly is itself evidence that you're a person with values who doesn't want to act badly."],
          choiceSets: [["losing control of my temper", "saying or doing something i'll regret", "acting on thoughts i don't want to act on"], ["anger control fear", "impulse control worry", "intrusive thoughts that scare me"]] },
        { titles: ["fear of who you might become", "afraid of changing into someone you don't want to be"],
          bodies: ["fear of becoming someone you don't recognize is often about watching yourself change and not being sure the changes are okay.", "the fear that you're becoming someone different — worse, harder, more closed — is worth paying attention to."],
          choiceSets: [["i feel myself hardening or changing in ways i don't like", "i'm scared i'll become like someone who hurt me", "i don't know who i'm becoming and it scares me"], ["becoming colder or harder", "fear of repeating a pattern seen in others", "identity uncertainty in the middle of change"]] },
        { titles: ["fear about your mental health", "scared of what's happening in your own mind"],
          bodies: ["fear about your own mental state — whether you're okay, whether you're stable, what your thoughts mean — is genuinely scary and also very common.", "noticing your mental health and being scared about it is not the same as being out of control. awareness is protective."],
          choiceSets: [["i'm scared my thoughts aren't normal", "i'm afraid i might be depressed or losing it", "i don't trust my own mind right now"], ["fear about thought patterns", "worry about mental health condition", "distrust of own mental state"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need from this?", "what would help most?"],
        bodies: ["you have a specific fear. what's most useful to take from this?", "named fear is workable. what fits for where you are?"],
        choiceSets: [["how to face it directly", "how to manage the fear while i can't avoid the thing", "whether the fear is proportional or overblown"], ["courage to approach it", "how to cope with it in the meantime", "reality check on the actual risk level"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["vague fear is harder because there's nothing specific to address. what's most useful?", "ambient dread needs a different approach. what fits?"],
        choiceSets: [["how to settle the nervous system even without a target", "whether something more specific might be underneath", "that this is real even without a clear cause"], ["nervous system regulation tools", "whether there's a more concrete fear underneath", "acknowledgment that it's real"]] },
      { titles: ["what do you need most?", "what fits?"],
        bodies: ["fear of loss runs deep. what's most useful to take from this?", "loving something means fearing losing it. what helps?"],
        choiceSets: [["how to hold the fear without it ruining the good thing", "how to address it if the thing is genuinely at risk", "that loving this much is okay even though it's terrifying"], ["how to stop fear from poisoning what's good", "action if the risk is real", "permission to love this deeply"]] },
      { titles: ["what do you need from this?", "what would help?"],
        bodies: ["fear turned inward is its own thing. what's most useful?", "self-directed fear needs a specific response. what fits?"],
        choiceSets: [["reassurance about my thoughts or reactions", "how to work on what's scaring me about myself", "whether i should talk to someone about this"], ["that my fears about myself don't define me", "how to address what i'm scared of", "whether professional support would help"]] }
    ],
    finals: [
      { titles: ["named fear is workable fear — you're already ahead", "the fact you can name it means you can face it"],
        bodies: ["having a specific fear you can name is actually an advantage over vague dread. you know what you're dealing with. the fear is real and the thing you're afraid of may be real. but fear and danger are not the same thing. fear is an alarm — one that sometimes goes off proportionally and sometimes doesn't.", "most specific fears are about a probability — how likely is this, and what would happen if it did? those are answerable questions, even if the answers are uncomfortable."],
        tips: ["look directly at the feared outcome: what specifically would happen? then what? walk through it step by step. it usually feels less catastrophic in full detail than as a vague threat", "assess actual probability — not just 'is it possible' but 'how likely is it really'", "if the thing is avoidable, consider whether avoiding it is worth what it costs you", "if it's something you have to face, preparation usually reduces fear more than avoidance does"] },
      { titles: ["your nervous system is in threat mode without a clear threat", "vague fear is real even without a target"],
        bodies: ["free-floating dread without a specific source is still a real experience. your nervous system is activated — something is keeping it in threat mode, even if you can't name exactly what. that's worth taking seriously even without a clear cause.", "sometimes vague fear is accumulated stress that hasn't been processed. sometimes it's your system picking up on something real that your conscious mind hasn't named yet. either way, it deserves attention."],
        tips: ["bottom-up approaches help more than top-down for vague fear: breathwork, movement, cold water, anything that speaks to the body directly", "write a stream of consciousness about what's making you feel unsafe. see what comes out — it often surfaces something more specific", "check your inputs: too much news, trauma content, or high-stakes content can keep the nervous system artificially activated", "if this is persistent, therapy focused on nervous system regulation (somatic work, trauma-informed) is specifically useful here"] },
      { titles: ["loving something means being vulnerable to losing it — that's the deal", "fear of loss is love looking ahead"],
        bodies: ["the fear of losing someone or something you love is directly proportional to how much it matters to you. the depth of the fear is the depth of the care. that's not a problem to fix — it's what love looks like when it's honest with itself about risk.", "the goal isn't to be fearless about loss. it's to not let the fear of loss prevent you from fully having what you have. to hold the relationship or the thing without the fear running the show."],
        tips: ["don't let fear of future loss keep you from being present in the good thing right now", "if the risk is real and concrete, take action on what's actually within your control", "practice taking stock of what you have, regularly — not as a cure for fear, but as a counterweight to it", "some fear of loss is the price of loving. the alternative — not loving as much — is a worse deal"] },
      { titles: ["the fact that you're scared of yourself means you have values", "self-directed fear is usually not what it sounds like"],
        bodies: ["fear about what you might do or who you might become is paradoxically a sign of self-awareness, not danger. people who are truly dangerous don't usually spend time worrying that they are. the fact that you're scared of your own reactions means you have standards for yourself that you're trying to hold.", "that said, self-directed fear deserves attention — not to suppress it, but to understand what it's pointing at and whether it needs action."],
        tips: ["intrusive thoughts that scare you are extremely common and don't predict your actions. the distress you feel about them is actually the proof they're unwanted", "if you're afraid of losing control in a specific way, build a buffer — the pause between impulse and action", "if you're scared of who you're becoming, check in with someone who knows you well. outside perspective is useful when you can't trust your own", "if your mental health fears feel significant, please talk to a professional. fear about your own mind is exactly what that support is for"] }
    ]
  },

  guilt: {
    root: {
      titles: ["what's the guilt about?", "where's it coming from?"],
      bodies: ["guilt is always pointing at something. let's figure out what.", "let's get specific about where the guilt is sitting."],
      choiceSets: [
        ["something i did", "something i didn't do", "guilt that's always kind of there", "guilt about surviving or having more"],
        ["an action i took", "an inaction — something i failed to do", "chronic guilt without a clear cause", "survivor guilt"]
      ]
    },
    l1: [
      { titles: ["what did you do?", "tell me about the action"],
        bodies: ["guilt about something you did is appropriate when the action caused harm. what you do with that guilt is what matters.", "guilt for an action is your conscience registering that something wasn't okay. that's actually healthy guilt."],
        choiceSets: [["i hurt someone", "i did something that violated my own values", "something that embarrasses or shames me"], ["caused harm", "went against who i want to be", "something i wish i hadn't done"]] },
      { titles: ["what didn't you do?", "what was the inaction?"],
        bodies: ["guilt about what you didn't do is often about a perceived failure to act when action mattered.", "omission guilt can be trickier than commission guilt because you're judging something that never happened."],
        choiceSets: [["i should have helped and didn't", "i stayed silent when i should have spoken up", "i didn't show up for someone who needed me"], ["failed to act when i could have", "didn't speak when it mattered", "wasn't there for someone"]] },
      { titles: ["chronic guilt — how long has it been there?", "guilt that's always kind of running"],
        bodies: ["guilt that's always there without a specific cause is often internalized — not from any particular action but from messages about who you should be.", "when guilt is the default feeling rather than the response to a specific thing, something deeper is going on."],
        choiceSets: [["i feel guilty about most things", "i don't know what i did but i feel guilty for existing", "i feel guilty whenever anyone is upset even if it's not about me"], ["chronic guilt as baseline", "guilt about existing without cause", "taking responsibility for others' feelings"]] },
      { titles: ["survivor guilt — who did you survive?", "what did you survive that others didn't?"],
        bodies: ["survivor guilt is guilt about continuing to exist or thrive when others didn't or couldn't. it's one of the most irrational but most human feelings.", "guilt about being okay when others are not is a very human response to an unfair situation."],
        choiceSets: [["someone died and i'm still here", "i escaped or left a situation others are still in", "i'm doing okay when people i love aren't"], ["death and survival", "escaped something others didn't", "thriving while others are struggling"]] }
    ],
    l2: [
      [
        { titles: ["you caused harm", "someone was hurt"],
          bodies: ["guilt after causing harm is the conscience doing its job. it registers the impact and asks what you'll do with it.", "healthy guilt moves toward repair. it doesn't get stuck in self-punishment."],
          choiceSets: [["they know about it", "they don't know about it", "i'm not sure if they know"], ["the person is aware", "they're unaware", "uncertain whether they know"]] },
        { titles: ["you went against your values", "did something you don't respect"],
          bodies: ["values-violation guilt is your own internal standard holding you accountable. that's actually your integrity speaking.", "the guilt about acting against your values is pointing toward what you actually believe — which is useful information."],
          choiceSets: [["i knew it was wrong and did it anyway", "i compromised in a moment of weakness", "i'm not sure if it was actually wrong or just uncomfortable"], ["deliberate choice against my values", "moment of weakness", "uncertainty about whether i was actually wrong"]] },
        { titles: ["something embarrassing or shameful", "guilt about something you wish didn't happen"],
          bodies: ["guilt that mixes with embarrassment or shame is particularly sticky because it's not just about the action — it's about what the action says about you.", "when guilt has a shame component, it's harder to process because it feels like it's pointing at who you are, not just what you did."],
          choiceSets: [["other people know", "only i know", "i'm afraid of people finding out"], ["public guilt", "private guilt", "fear of exposure"]] }
      ],
      [
        { titles: ["you could have helped and didn't", "failure to act when it mattered"],
          bodies: ["guilt about not helping is complicated because the standard you're holding yourself to may or may not have been realistic at the time.", "hindsight makes inaction look more avoidable than it often was in the moment."],
          choiceSets: [["i had the ability and chose not to use it", "i didn't know what to do in the moment", "something stopped me even though i wanted to help"], ["could have acted, didn't", "didn't know how in the moment", "wanted to act but was blocked by something"]] },
        { titles: ["you didn't speak when you should have", "stayed silent when a voice was needed"],
          bodies: ["silence when something needed to be said is often about self-protection — which is understandable. the guilt comes when you see what the silence cost.", "guilt about staying silent is about integrity — your own standard for when you should have spoken up."],
          choiceSets: [["i saw something wrong and said nothing", "i didn't defend someone who needed defending", "i agreed when i should have pushed back"], ["witnessed something wrong and stayed silent", "failed to defend someone", "complied when i disagreed"]] },
        { titles: ["you weren't there for someone", "absent when someone needed you"],
          bodies: ["guilt about not being there for someone often carries the weight of what it would have meant to them if you had been.", "the guilt is about the gap between what you believe you should have done and what you did."],
          choiceSets: [["they asked and i wasn't available", "they needed me and i didn't show up", "i didn't know they needed me until it was too late"], ["turned down a request", "failed to show up", "found out too late"]] }
      ],
      [
        { titles: ["chronic guilt as baseline", "guilty for existing"],
          bodies: ["guilt that's always present often comes from internalized messages about being 'too much' or taking up space — messages that were given, not earned.", "when guilt is the background state, it's usually been installed rather than generated by actual actions."],
          choiceSets: [["i grew up feeling like i was always doing something wrong", "i feel responsible for how others feel", "i apologize constantly, often for things that aren't my fault"], ["messages received early about being wrong", "absorbing responsibility for others' emotions", "apologizing as a default mode"]] },
        { titles: ["responsible for others' feelings", "taking on guilt that isn't yours"],
          bodies: ["feeling responsible for how other people feel is a pattern, not a fact. other people's feelings are not your fault by default.", "when someone is upset, the instinct to assume you caused it — even when you didn't — is the signature of chronic guilt."],
          choiceSets: [["when people are upset i assume i caused it", "i work hard to manage others' emotions", "i feel guilty when people around me are unhappy"], ["automatic self-blame for others' emotions", "emotion-managing as full-time job", "others' unhappiness registered as my failure"]] },
        { titles: ["guilt without knowing why", "guilt about nothing specific"],
          bodies: ["feeling guilty without a concrete cause is often about worth — a background sense that your existence is a net negative, which is a lie that gets installed early.", "chronic free-floating guilt often has nothing to do with anything you've actually done."],
          choiceSets: [["i feel like i'm always failing somehow", "i feel guilty for having good things", "i don't know why but the guilt just lives here"], ["general sense of failing", "guilt about having positive things", "baseline guilt without any cause"]] }
      ],
      [
        { titles: ["you survived a death", "guilt about still being here"],
          bodies: ["surviving someone — living when they died — creates guilt that is deeply human and completely irrational. you are not alive because they died. those are separate facts.", "survivor guilt about death is one of the most common grief complications. it's not logical but it's also not unusual."],
          choiceSets: [["they died and i didn't and i can't stop thinking about it", "i feel guilty for having good days after they're gone", "i feel like i'm betraying them by continuing to live"], ["survivor guilt about a specific death", "guilt about moving forward", "guilt about living fully after their death"]] },
        { titles: ["you got out, others didn't", "escaped something others are still in"],
          bodies: ["escaping a bad situation while others remain — a toxic family, an abusive relationship, a poverty trap, a dangerous place — creates guilt that can interfere with actually using your freedom.", "leaving when others can't is not something you should feel guilty for. you didn't trap them by leaving."],
          choiceSets: [["i left a difficult family or relationship situation and they're still in it", "i found a way out of circumstances others couldn't", "i escaped a place or situation others are still stuck in"], ["escaped family or relationship situation", "found opportunity others didn't get", "left a place others couldn't leave"]] },
        { titles: ["you're okay, others aren't", "doing well while people you love struggle"],
          bodies: ["guilt about thriving when people you care about are struggling is about loyalty — it can feel like your success or happiness is a betrayal.", "your wellbeing is not in competition with the people you love. you doing well doesn't take from them."],
          choiceSets: [["i'm doing okay while a loved one is suffering", "i feel like i should dim myself to be fair", "i feel guilty for being happy when they're not"], ["success or happiness while loved ones struggle", "shrinking to feel less unfair", "guilt for positive experiences during their hard time"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need from this?", "what would help most?"],
        bodies: ["guilt about something you did needs somewhere to go. what fits for you?", "action-based guilt can move toward repair. what matters most right now?"],
        choiceSets: [["how to make it right if i can", "how to deal with it if i can't", "that guilt doesn't mean i'm a bad person"], ["repair path", "processing without repair", "separating guilt from identity"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["guilt about what you didn't do is its own thing. what's most useful here?", "inaction guilt needs a specific response. what fits?"],
        choiceSets: [["whether there's still something i can do", "how to forgive myself for not acting", "understanding why i didn't act"], ["whether repair is possible now", "self-forgiveness", "understanding what stopped me"]] },
      { titles: ["what would help most?", "what do you need right now?"],
        bodies: ["chronic guilt isn't about what you did — it's about how you're wired. what's most useful?", "baseline guilt needs a different approach. what fits?"],
        choiceSets: [["understanding where this comes from", "how to stop taking on responsibility that isn't mine", "that this level of guilt isn't normal or deserved"], ["origin of the pattern", "how to stop absorbing others' responsibility", "perspective that this is a pattern, not a verdict"]] },
      { titles: ["what do you need from this?", "what would help?"],
        bodies: ["survivor guilt doesn't follow logic — but it still needs to be addressed. what fits?", "guilt about surviving or escaping is real. what's most useful?"],
        choiceSets: [["just to have this acknowledged as real even if it doesn't make sense", "how to move forward without feeling like a traitor", "whether there's anything i can actually do for the people i'm feeling guilty about"], ["acknowledgment that this is real", "how to live fully without betrayal guilt", "action that might address the underlying concern"]] }
    ],
    finals: [
      { titles: ["guilt is your conscience doing its job — now give it somewhere to go", "you did something you regret. that's information, not identity."],
        bodies: ["guilt that comes from actually doing something wrong is healthy guilt — it's your conscience registering the impact and asking what you'll do next. the question is whether it moves toward repair or gets stuck in self-punishment. self-punishment doesn't undo the thing. repair can.", "feeling guilty for something you did doesn't make you a bad person. it makes you a person with a conscience. what you do with the guilt — whether you try to make it right, learn from it, or just punish yourself indefinitely — is what actually says something about you."],
        tips: ["if you hurt someone and repair is possible, apologize — genuinely, without defensiveness or expectation of forgiveness", "if repair isn't possible, understand what led to the action so you know yourself well enough to do differently", "separate 'i did a bad thing' from 'i am bad'. one is true. the other is a story", "at some point, continued self-punishment past the point of remorse serves nothing. give yourself the forgiveness you'd give a friend who genuinely tried to make it right"] },
      { titles: ["not acting is a choice — but judge it fairly", "hindsight makes inaction look easier than it was"],
        bodies: ["guilt about what you didn't do deserves to be looked at honestly — both the ways it's appropriate and the ways it isn't. did you actually have the power to act, the knowledge to act, the safety to act in that moment? sometimes yes, sometimes no. hindsight always has more information than the original moment did.", "if you genuinely could have acted and chose not to, that's worth acknowledging. if you couldn't have, the guilt is punishing you for something outside your control — which isn't fair."],
        tips: ["ask yourself honestly: in that moment, did i have the ability, information, and safety to act differently? if no, the guilt isn't fully deserved", "if you could have acted and didn't, ask why. understanding what stopped you is more useful than self-punishment", "if there's something you can still do now — reach out, apologize, contribute in some way — consider doing it", "the goal is to understand yourself, not to punish yourself into paralysis"] },
      { titles: ["chronic guilt was installed — you didn't earn it", "this level of guilt isn't a verdict, it's a wound"],
        bodies: ["when guilt is the background state — when you feel responsible for everything and everyone, when you apologize for existing — it wasn't generated by your actions. it was installed. by early environments, by people who made you feel like you were too much or never enough, by systems that punished you for things outside your control.", "chronic guilt is one of the most common markers of early emotional environments that were difficult. it's not evidence of what you are. it's evidence of what you absorbed."],
        tips: ["notice when you're apologizing or feeling guilty for things that aren't actually your fault. start counting them", "ask: whose voice does the guilt sound like? it's often not your own", "practice being responsible only for the things that are actually yours — your actions, your choices. not others' feelings", "therapy specifically focused on self-worth and early messages is very effective for chronic guilt. this is exactly what it's for"] },
      { titles: ["you're alive — that's not a crime", "your survival isn't the reason others suffered"],
        bodies: ["survivor guilt is one of the most painful and most irrational forms of guilt — and also one of the most human. you surviving didn't cause someone else to die, or stay, or struggle. those are connected by circumstance, not causation. your existence wasn't the cost of theirs.", "and yet the guilt feels real and it is real, even while the logic isn't. the path through survivor guilt isn't argument — it's permission. permission to live, to thrive, to have good days, to move forward. that's not betrayal. that's the only thing that makes the survival worth something."],
        tips: ["you surviving or escaping does not diminish what happened to others or what they're still going through", "find a way to honor what you survived without letting it become the thing that now imprisons you", "if you can help the people you feel guilty about, help them — not as penance but because you want to", "grief therapy or trauma therapy specifically addresses survivor guilt. it can help you separate the grief from the guilt"] }
    ]
  },

  frustration: {
    root: {
      titles: ["what's frustrating you?", "where's the frustration sitting?"],
      bodies: ["frustration is always about something being blocked. let's figure out what.", "something is getting in the way. let's find it."],
      choiceSets: [
        ["something i'm trying to do keeps getting blocked", "a specific person is the obstacle", "a situation i can't change", "i'm frustrated with myself"],
        ["my goal keeps hitting walls", "someone specific is getting in the way", "an unchangeable situation", "frustrated at my own limitations"]
      ]
    },
    l1: [
      { titles: ["what keeps getting blocked?", "what's not moving?"],
        bodies: ["goal-blocking frustration is the friction between where you are and where you want to be.", "when what you're working toward keeps hitting obstacles, the frustration is the energy of your drive hitting a wall."],
        choiceSets: [["a work or school goal", "a personal goal or project", "progress in general — nothing seems to move"], ["professional or academic progress", "something personal i'm working on", "general sense of being stuck"]] },
      { titles: ["who's the obstacle?", "what's this person doing?"],
        bodies: ["frustration with a specific person is particularly charged because there's a face on the problem.", "when someone is getting in the way, the frustration mixes with whatever you feel about them."],
        choiceSets: [["they're directly blocking me", "they're unhelpful when i need help", "their incompetence or behavior is making things harder for me"], ["active interference", "failing to help when they should", "creating obstacles through their behavior"]] },
      { titles: ["what's unchangeable about it?", "what can't be moved?"],
        bodies: ["frustration with things you can't change is one of the hardest kinds — because the normal outlet (changing the thing) isn't available.", "when the obstacle is something that won't move no matter what you do, the frustration needs a different kind of processing."],
        choiceSets: [["a systemic or structural issue i can't fix alone", "a health or physical limitation", "circumstances that are just what they are"], ["systemic issues beyond individual control", "physical or health limitations", "life circumstances that are fixed"]] },
      { titles: ["what are you frustrated with about yourself?", "what are you not getting from yourself?"],
        bodies: ["self-directed frustration is the hardest kind because you can't get away from the source.", "frustration with yourself often comes from the gap between who you are and who you think you should be."],
        choiceSets: [["i keep making the same mistakes", "i'm not meeting my own standards", "i can't seem to change something about myself i want to change"], ["repeating patterns i want to stop", "not living up to my own expectations", "stuck change — the thing won't shift"]] }
    ],
    l2: [
      [
        { titles: ["work or school getting blocked", "professional or academic obstacle"],
          bodies: ["work and school obstacles are frustrating partly because they carry stakes — they affect things that matter.", "professional frustration often has power dynamics mixed in, which adds to the heat."],
          choiceSets: [["bureaucracy or process getting in the way", "people or politics blocking progress", "my own performance not matching what i need"], ["systems and process", "interpersonal or political dynamics", "my own performance as the blocker"]] },
        { titles: ["a personal project or goal", "something you're working on personally"],
          bodies: ["personal project frustration often comes from a combination of external obstacles and internal perfectionism.", "when something that's yours keeps hitting walls, it's personal in a way that work frustration sometimes isn't."],
          choiceSets: [["the thing won't come together the way i want", "outside factors keep interrupting", "i keep getting in my own way"], ["not coming together as envisioned", "external interruptions", "self-sabotage or internal blocking"]] },
        { titles: ["general sense of being stuck", "nothing seems to move"],
          bodies: ["when progress feels impossible across everything, the frustration often compounds into something heavier — hopelessness starting to mix in.", "general stuckness is particularly disorienting because there's no single thing to address."],
          choiceSets: [["professionally stuck", "personally stuck", "stuck in every area at once"], ["career or work feels frozen", "personal life feels frozen", "all areas feel blocked simultaneously"]] }
      ],
      [
        { titles: ["actively blocking you", "direct interference"],
          bodies: ["someone directly blocking your path creates frustration that has a very clear target. it also often comes with a sense of injustice.", "active interference from someone raises the stakes because it's intentional, or at least deliberate."],
          choiceSets: [["they're doing it on purpose", "i don't think they realize they're doing it", "it doesn't matter if it's intentional — it's blocking me"], ["deliberate interference", "unaware of the impact", "impact is what matters regardless of intent"]] },
        { titles: ["unhelpful when you need help", "failing to support or enable"],
          bodies: ["frustration from someone failing to help when they should — or when it's their job to — carries a sense of unfairness on top of the practical obstacle.", "being left without support you had reason to expect is particularly frustrating."],
          choiceSets: [["they should help and they're not", "they're trying but failing", "i can't count on them and it keeps surprising me"], ["capable of helping, choosing not to", "willing but genuinely unable to help effectively", "unreliable despite repeated experience"]] },
        { titles: ["their behavior makes things harder", "incompetence or conduct is the obstacle"],
          bodies: ["when someone's behavior or incompetence creates problems for you, the frustration comes from having no control over their actions.", "being affected by someone else's behavior without being able to change it is a particular kind of frustrating."],
          choiceSets: [["their incompetence is causing problems i have to fix", "their conduct is creating a difficult environment", "their decisions affect me badly and i have no say"], ["dealing with fallout from their mistakes", "their behavior is creating a hostile or difficult environment", "affected by decisions i have no input on"]] }
      ],
      [
        { titles: ["systemic issues you can't fix alone", "structural frustration"],
          bodies: ["frustration with systems and structures is real and legitimate — and also hard because the scale makes individual action feel futile.", "systemic frustration often carries political and moral dimensions that give it a different weight."],
          choiceSets: [["the system is unfair and i can't change it", "i'm doing everything right and the system still blocks me", "i'm exhausted by how unchangeable it is"], ["structural unfairness with no individual remedy", "doing everything right still not enough", "depletion from sustained systemic friction"]] },
        { titles: ["physical or health limitations", "your body is the obstacle"],
          bodies: ["frustration with your own physical limitations — whether chronic illness, disability, recovery, or aging — is particularly charged because the limitation is also you.", "when your body is the thing that's blocking you, the frustration can easily mix with grief and self-directed anger."],
          choiceSets: [["my body won't do what i need it to", "a health issue is limiting what i can pursue", "i've had to give up things i wanted because of physical limits"], ["physical inability to do something", "health condition limiting options", "having to let go of goals because of physical constraints"]] },
        { titles: ["circumstances that just are what they are", "fixed external reality"],
          bodies: ["frustration with fixed circumstances — geography, history, timing — is about wanting something different from what is, which can't be directly satisfied.", "when what you're frustrated with can't be changed, the work is about adjusting your relationship to it."],
          choiceSets: [["timing — wrong place at wrong time", "circumstances of birth or background", "something that happened that can't be undone"], ["timing or circumstance", "background or starting point", "something irreversible"]] }
      ],
      [
        { titles: ["making the same mistakes", "patterns you can't seem to break"],
          bodies: ["self-frustration about repeating patterns is particularly demoralizing because you can see exactly what's happening but changing it still doesn't happen.", "repeating patterns aren't character flaws — they're usually serving some function or protected by some fear that needs to be understood."],
          choiceSets: [["i know what i'm doing wrong but keep doing it", "i try to change and slide back", "i don't know why i keep doing this"], ["aware but unable to change", "progress followed by regression", "without understanding of the cause"]] },
        { titles: ["not meeting your own standards", "the gap between who you are and who you want to be"],
          bodies: ["frustration at not meeting your own standards is a painful space — you know what you want to be doing but you're not doing it.", "the gap between standards and reality is where most self-frustration lives."],
          choiceSets: [["i'm not performing at the level i expect of myself", "i have high standards and i keep falling short", "i don't know if the standards are realistic or if i am the problem"], ["performance falling short of my standards", "high bar i consistently miss", "questioning whether the bar or my performance is the issue"]] },
        { titles: ["stuck change", "you want to change something about yourself but it won't shift"],
          bodies: ["trying to change something about yourself and not being able to is one of the more frustrating experiences — because the obstacle is also the thing you're trying to fix.", "resistance to change usually means the thing being changed has been doing something — protecting something, serving a function. understanding that is the key."],
          choiceSets: [["i've been trying to change this for a long time", "i make progress then lose it", "i'm not sure i actually believe i can change this"], ["long-term struggle with the same thing", "progress-relapse cycle", "doubt about whether change is possible"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need from this?", "what would help most?"],
        bodies: ["your goal is blocked. what's most useful to take from this?", "something keeps getting in the way. what fits?"],
        choiceSets: [["how to get around the obstacle", "whether to change approach or keep pushing", "just to be heard about how frustrating this is"], ["strategies for moving around the block", "when to persist vs. pivot", "acknowledgment"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["someone specific is the obstacle. what's most useful?", "a person is getting in the way. what fits?"],
        choiceSets: [["how to deal with this person directly", "how to route around them", "just to vent about how frustrating they are"], ["how to address it with them", "workarounds that don't involve changing them", "just venting"]] },
      { titles: ["what do you need from this?", "what fits?"],
        bodies: ["the situation can't be changed. what's most useful?", "an unchangeable obstacle needs a different approach. what fits?"],
        choiceSets: [["how to stop letting the unchangeable thing drain me", "whether there's any small part of it i can influence", "how to accept what i can't change without being a pushover about it"], ["how to protect my energy from a fixed obstacle", "identifying any marginal influence", "acceptance without resignation"]] },
      { titles: ["what do you need most?", "what would help?"],
        bodies: ["you're frustrated with yourself. what's most useful?", "self-directed frustration needs somewhere to go. what fits?"],
        choiceSets: [["understanding why i keep doing this", "practical steps for actually changing it", "that being frustrated with myself doesn't make me worse"], ["insight into the pattern", "concrete approaches to change", "self-compassion"]] }
    ],
    finals: [
      { titles: ["friction is real — now let's find the angle", "some blocks are walls, some are doors"],
        bodies: ["goal-blocking frustration is energy looking for an outlet. the obstacle is real. the question is whether the path forward is to push harder, find a way around, or change what you're pushing toward. none of those is giving up.", "frustration about blocked progress is a signal — it means you care, which is good. the question is what to do with that energy. throwing it directly at a wall isn't always the move."],
        tips: ["ask: what specifically is the obstacle? name it precisely. vague frustration is harder to solve than 'this specific thing is blocking this specific goal'", "is there a different angle of approach? the thing you want might be reachable through a different path", "is the goal itself worth reconsidering, or just the method? those are different questions", "give yourself permission to be frustrated — then give yourself a time limit on just being frustrated before deciding what to do"] },
      { titles: ["you can't change people — only your relationship to them", "dealing with a human obstacle is its own skill"],
        bodies: ["when someone is blocking you, the frustrating truth is that you can't directly change them. you can influence, address, avoid, escalate, or accept — but you can't make them different. the work is figuring out which of those moves makes sense.", "frustration with a specific person is legitimate. what you do with it is your choice — confront, route around, escalate if warranted, or let it go."],
        tips: ["decide: is this a conversation worth having with them directly? if yes, have it once, clearly, without heat if possible", "if direct conversation won't work, identify what you can do that doesn't depend on them", "if they have power over you, escalate appropriately or protect yourself as best you can", "some people are obstacles you can't remove. the question becomes: can i work around them, or does this situation need to change?"] },
      { titles: ["you can't change it — but you can change your relationship to it", "some things are fixed. how you hold them doesn't have to be."],
        bodies: ["frustration with unchangeable things is one of the most draining emotional states because the normal outlet — changing the thing — isn't available. the energy has nowhere to go. the work is about what you do with the energy, not about changing the situation.", "accepting what can't be changed is not the same as being okay with it. you can be not okay with something that's still not going to change. both things can be true."],
        tips: ["distinguish clearly between what you can and can't control in the situation. only spend energy on the first category", "find what, if anything, you can influence even within the constraint. even marginal influence matters", "build around the fixed obstacle rather than continuing to spend energy on it", "if the frustration is chronic and the situation is genuinely fixed, therapy for acceptance and meaning-making can help"] },
      { titles: ["self-frustration is the hardest kind", "you can't get away from the source — but you can understand it better"],
        bodies: ["frustration with yourself is particularly painful because there's no distance from the thing you're frustrated about. you are it. the temptation is to punish yourself into changing. that almost never works — because the punishment is just more of the same energy that's already not working.", "self-directed frustration usually points at a pattern that's been protected by something — a fear, a payoff, a belief. until you understand what the pattern is doing, pushing against it often just makes it stick harder."],
        tips: ["instead of trying to force change, get curious about the pattern. what does it do for you? what is it protecting?", "self-compassion isn't soft — it's strategic. harsh self-judgment activates defensiveness, which makes change harder", "look for the smallest possible unit of change. not 'stop doing X' but 'do X differently one time in one situation'", "if you've been trying to change something for a long time without success, a therapist can help you understand what's underneath it"] }
    ]
  },

  hopelessness: {
    root: {
      titles: ["what's making it feel hopeless?", "where does the hopelessness sit?"],
      bodies: ["hopelessness is specific — there are different kinds. let's find what this is.", "there's a version of what's blocking hope. let's find it."],
      choiceSets: [
        ["i can't see a way forward", "it's been so long i've lost faith", "i keep trying and nothing changes", "i've lost my sense of why any of it matters"],
        ["no path visible from here", "duration has worn down my belief", "learned helplessness — effort doesn't work", "meaning has gone quiet"]
      ]
    },
    l1: [
      { titles: ["what is it you can't see a way forward on?", "what feels impossible?"],
        bodies: ["when you genuinely can't see a path, it doesn't mean one doesn't exist — it means you're in a position where it's not visible from where you're standing.", "hopelessness about a specific situation is different from global hopelessness — even when it doesn't feel that way."],
        choiceSets: [["a specific situation i don't know how to change", "my life overall", "something important to me that seems impossible"], ["one particular thing", "life as a whole", "a specific hope or goal"]] },
      { titles: ["how long has this been going on?", "when did you start losing faith?"],
        bodies: ["duration fatigue is real — when something has been hard for a long time, the belief that it will change erodes naturally. that erosion isn't the truth about the future.", "losing faith after a long difficult stretch is not weakness — it's the reasonable response to a sustained hard thing."],
        choiceSets: [["months of the same thing with no change", "years of trying", "so long i can't remember feeling differently"], ["a difficult stretch of months", "years of sustained difficulty", "can't remember what hope felt like"]] },
      { titles: ["what have you been trying?", "what keeps not working?"],
        bodies: ["when you've tried and tried and things don't change, the brain starts drawing a conclusion: effort doesn't work. that conclusion, once drawn, makes trying feel pointless.", "learned helplessness — the state where you stop trying because trying has never worked — is one of the most accurate psychological descriptions of chronic hopelessness."],
        choiceSets: [["i've tried everything and nothing has changed", "i try and things improve but then slide back", "i've stopped trying because what's the point"], ["extensive effort with no result", "progress-regression cycle", "effort shut down"]] },
      { titles: ["what's lost its meaning?", "what used to matter that doesn't anymore?"],
        bodies: ["losing the sense that things matter — that any of it adds up to something worth having — is existential hopelessness. it's the hardest kind.", "when meaning goes quiet, it's not just that specific things feel hopeless — it's that the whole frame feels hollow."],
        choiceSets: [["i don't see the point of what i'm doing", "nothing i care about feels worth it anymore", "i've lost faith in any kind of future worth having"], ["the 'why' is gone", "things i used to care about feel empty", "the future looks either blank or bad"]] }
    ],
    l2: [
      [
        { titles: ["one specific thing", "a particular situation feeling impossible"],
          bodies: ["situational hopelessness is bounded — it's about a specific thing, not everything. even when it doesn't feel that way.", "when you can name specifically what feels impossible, that's actually useful — it means the hopelessness has an address."],
          choiceSets: [["a relationship situation", "work or school", "my health or circumstances"], ["interpersonal situation", "professional or academic situation", "health or external circumstances"]] },
        { titles: ["life as a whole", "overall hopelessness"],
          bodies: ["when hopelessness is about everything, it feels total — which is the most distressing version. but 'total' hopelessness is usually about several specific things stacking.", "overall hopelessness often dissolves somewhat when it's broken into specific components."],
          choiceSets: [["all areas of my life feel stuck", "nothing feels like it could get better", "i can't imagine a version of my life that's different or better"], ["stuck across all areas", "can't imagine improvement", "future blindness — no good version visible"]] },
        { titles: ["a specific hope that seems impossible", "something important to you that feels out of reach"],
          bodies: ["grief for a specific lost hope — a relationship, a career, a life path — is real grief even when the thing never happened.", "when one important thing feels impossible, its significance can eclipse everything else."],
          choiceSets: [["something i really wanted that seems unachievable", "a dream or goal that feels closed off", "something i was counting on that seems like it won't happen"], ["specific goal or desire", "dream feeling closed off", "anticipated future that seems foreclosed"]] }
      ],
      [
        { titles: ["months of difficulty", "a hard stretch that won't end"],
          bodies: ["months of sustained difficulty without resolution or relief has a cumulative effect on faith. the longer it goes, the more the brain starts drawing permanent conclusions from temporary circumstances.", "what feels like a conclusion — 'this will never change' — is actually an inference from a sample. the sample is large but it's still a sample."],
          choiceSets: [["things have been hard for many months", "i've been waiting for relief that hasn't come", "each week that passes makes it harder to believe it'll change"], ["extended difficult period", "waiting for relief that doesn't arrive", "each passing week erodes faith"]] },
        { titles: ["years of the same thing", "chronic difficulty eroding faith"],
          bodies: ["years of the same hard thing without significant change does erode hope. that's not irrational — it's the reasonable inference from a large sample of experience. but chronic situations can change in ways that shorter ones can't — through accumulation, unexpected events, or new approaches.", "the fact that it's been this way for years makes change feel impossible, not actually impossible."],
          choiceSets: [["this has been going on for years", "i've adapted to it being hard but lost hope", "the amount of time makes change feel unreal"], ["multi-year difficulty", "adapted to the hardness, hope depleted", "time makes change feel fictional"]] },
        { titles: ["can't remember feeling different", "it's been so long"],
          bodies: ["when you can't remember what hope felt like, it doesn't mean you can never feel it again — it means the hard stretch has been long enough to obscure the memory.", "long enough difficulty can make the previous baseline feel like fiction."],
          choiceSets: [["i genuinely can't remember feeling hopeful", "the difficult version of my life is all i have reference for", "i look back and can't find a time when things were better"], ["memory of hope is gone", "difficulty is the only reference point", "past better times are hard to access"]] }
      ],
      [
        { titles: ["extensive effort with no result", "tried everything"],
          bodies: ["when you've genuinely tried and nothing has changed, the conclusion 'effort doesn't matter' is understandable — even though it's not necessarily true. it's the brain's pattern-matching system drawing a conclusion from consistent data.", "the effort has been real and the lack of result has been real. that's exhausting. the question is whether different effort — not more effort — might produce different results."],
          choiceSets: [["i've tried the obvious things and they didn't work", "i've tried for so long i don't have more to give", "i don't know what else to try"], ["conventional approaches exhausted", "effort-capacity depleted", "out of options to try"]] },
        { titles: ["progress then regression", "keeps sliding back"],
          bodies: ["progress-then-regression is one of the most demoralizing experiences because it suggests things can be better — and then takes that away.", "the cycle of progress and regression can feel like cruelty. it's usually about underlying things that haven't been addressed, not about the futility of change."],
          choiceSets: [["things get better and then fall back", "i get traction and then lose it", "the regression always erases the progress"], ["up and down without net progress", "traction that doesn't hold", "gains that keep getting reversed"]] },
        { titles: ["effort shut down", "stopped trying"],
          bodies: ["stopping trying is a reasonable response to a lot of failed attempts. it's also a self-fulfilling position — if you stop trying, the probability of change does go to zero.", "learned helplessness is one of the most well-documented psychological states. it's real. and it's also modifiable — usually gradually, with small wins that rebuild the evidence that effort does matter."],
          choiceSets: [["i stopped trying because i didn't see the point", "i'm afraid to try again because of how bad it feels when it doesn't work", "i don't have the energy to try even if i wanted to"], ["stopped trying", "fear of further failure preventing new effort", "energy depleted even if the will were there"]] }
      ],
      [
        { titles: ["the why is gone", "lost the sense of what it's all for"],
          bodies: ["losing the sense of why — what any of it is for — is existential in a way that's distinct from situational hopelessness. it's not that one thing feels impossible, it's that the whole frame feels hollow.", "meaning is often found rather than given. its absence doesn't mean it's permanently gone — it means it needs to be found again, often through connection and action rather than reflection."],
          choiceSets: [["i don't know what i'm working toward anymore", "the bigger picture has gone blank", "nothing feels like it adds up to anything"], ["lost direction and purpose", "the larger frame is gone", "nothing coalescing into something that matters"]] },
        { titles: ["things you used to care about feel empty", "the caring turned off"],
          bodies: ["when things that used to matter stop mattering, the world shrinks to a flat, uniform experience of nothing particularly worth having.", "care and investment can come back — but they usually don't come back through direct pursuit. they come back through small actions, connections, and exposures to things that have even a flicker of interest."],
          choiceSets: [["things i used to love feel hollow", "relationships that mattered don't feel meaningful", "i go through the motions without feeling why i'm doing any of it"], ["passion and interest are gone", "relationships feel hollow", "functional but purposeless"]] },
        { titles: ["the future looks blank or bad", "can't imagine a good version of what's ahead"],
          bodies: ["future blindness — not being able to imagine a positive future — is one of the clinical markers of hopelessness and depression. the inability to see a good future isn't prediction. it's a symptom.", "when the brain can't generate a positive future, it doesn't mean there isn't one — it means the brain's projection system is broken right now."],
          choiceSets: [["the future looks the same as or worse than now", "i can't imagine things being significantly different", "when i try to imagine a good future i come up blank"], ["projection of same or worse", "imagination of change is impossible", "blank where the future should be"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need most right now?", "what would help?"],
        bodies: ["you can't see a path. what's most useful to take from this?", "situational hopelessness needs somewhere to land. what fits?"],
        choiceSets: [["someone to say the path exists even if i can't see it", "help finding even a small way forward", "just to have the hopelessness acknowledged"], ["hope on my behalf", "a small concrete step", "acknowledgment"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["it's been so long. what's most useful to take from this?", "duration fatigue is real. what fits for you right now?"],
        choiceSets: [["acknowledgment that duration matters and wears people down", "whether things like this actually do change", "how to hold on when you can't see the point"], ["acknowledgment of what duration costs", "evidence or perspective that change is possible", "how to survive the long stretch"]] },
      { titles: ["what fits most right now?", "what do you need?"],
        bodies: ["effort hasn't been paying off. what's most useful?", "learned helplessness needs a different approach. what fits?"],
        choiceSets: [["whether i should try differently or try harder", "how to rebuild the belief that effort can work", "just to have the effort acknowledged even if it hasn't worked"], ["different approach vs. more effort", "how to rebuild agency", "acknowledgment of the effort"]] },
      { titles: ["what do you need from this?", "what would help?"],
        bodies: ["meaning has gone quiet. what's most useful to take from this?", "existential hopelessness is its own thing. what fits?"],
        choiceSets: [["whether meaning can come back", "how to find it when you've lost it", "just to have the emptiness acknowledged"], ["perspective that meaning is findable", "how to start looking for it", "acknowledgment"]] }
    ],
    finals: [
      { titles: ["you can't see a path — but you're not seeing the full picture", "hopelessness about a specific thing doesn't mean the thing is hopeless"],
        bodies: ["when you can't see a way forward, it usually means you're at a vantage point that doesn't show the path — not that the path doesn't exist. hopelessness is not reliable information about the future. it's reliable information about how you feel right now from where you're standing.", "new information, new circumstances, new angles, unexpected help — these things change what's possible all the time. from inside hopelessness, they're invisible. that's the nature of it. but it's not the nature of reality."],
        tips: ["write out what 'a way forward' would need to look like, even if it seems unlikely. sometimes articulating it reveals it's more possible than it felt", "talk to someone who has been through something similar. their existence as a counterexample matters", "hopelessness is often self-perpetuating — it prevents action, which prevents results, which confirms hopelessness. a tiny action can interrupt this loop", "if hopelessness is persistent and affecting daily functioning, please talk to a therapist or doctor. it's specifically treatable"] },
      { titles: ["duration fatigue is real — and it's not prophecy", "the fact that it's been long doesn't mean it stays long"],
        bodies: ["when something has been hard for a long time, the brain draws a very understandable conclusion: this is how it is. that conclusion feels like a fact but it's an inference — and it's one that chronic situations regularly prove wrong. duration creates hopelessness. it doesn't create permanent futures.", "the exhaustion of the long stretch is real. your faith is depleted because you've been carrying something heavy for a long time. that's appropriate. it's not proof that things can't change."],
        tips: ["find one person who made it through something similar over time. let their example do some work in your brain", "break it into smaller questions: not 'will this ever change?' but 'what's one thing that could be different in the next month?'", "some things that seem fixed for years change suddenly when circumstances change. don't make permanent decisions based on current conditions", "please talk to a therapist. long-duration hopelessness is exactly what that support addresses and it can make a real difference"] },
      { titles: ["you've tried hard — now try differently", "helplessness is learned, which means it can be unlearned"],
        bodies: ["when effort consistently doesn't produce results, the brain reasonably concludes that effort doesn't matter here. that's learned helplessness — one of the most studied states in psychology. it's real. it's also not permanent. it usually changed not by trying harder but by finding tiny evidence that something can be different.", "the pattern of effort not working is real data. but it's data about the specific approaches you've tried, not about the possibility of change. sometimes the change required is not more effort but different effort — a different approach, a different frame, outside help."],
        tips: ["if you've been trying the same thing without results, the first question is: is there a meaningfully different approach that hasn't been tried?", "start stupidly small — the point isn't to solve the problem but to create one instance of 'i tried and something responded'. even tiny", "reach out for outside help. sometimes the missing ingredient is not more of you but someone else's perspective or resources", "if hopelessness and effort-shutdown have been going on for a while, therapy — specifically CBT or behavioral activation — is designed exactly for this state"] },
      { titles: ["meaning doesn't always stay — but it comes back", "the absence of meaning is a state, not a sentence"],
        bodies: ["when meaning goes quiet, it feels permanent. the world doesn't feel like it has anything worth orienting toward. but meaning isn't a fixed property of the world — it's something that gets created through connection, action, and attention. its absence means it needs to be found again, not that it's permanently gone.", "meaning tends to come back not through searching directly but through doing — small things, connections, exposure to what once interested you. it often shows up sideways, unexpectedly, in something small."],
        tips: ["don't look for big meaning right now — look for tiny interest. something even slightly engaging. follow that thread", "meaning is often relational — found in connection to other people, causes, or things beyond yourself", "depression is the most common cause of meaning loss and it's specifically treatable. please consider talking to a doctor or therapist", "keep yourself in contact with life even when it doesn't feel meaningful. meaning usually comes from engagement, not from prior inspiration"] }
    ]
  },

  heartbreak: {
    root: {
      titles: ["what happened?", "what's the heartbreak about?"],
      bodies: ["heartbreak comes in different forms. let's figure out what kind this is.", "let's get specific about what's been broken."],
      choiceSets: [
        ["a relationship ended", "i was betrayed", "feelings that were never returned", "we drifted apart"],
        ["it's over", "i was betrayed by someone i loved", "unrequited love", "we grew apart without a clear ending"]
      ]
    },
    l1: [
      { titles: ["how did it end?", "what happened?"],
        bodies: ["relationship endings are their own grief — even when the ending was necessary.", "the way it ended matters to how the heartbreak sits."],
        choiceSets: [["they ended it", "i ended it", "it fell apart mutually"], ["they left", "i chose to leave but it still hurts", "no single decision — just collapse"]] },
      { titles: ["what did they do?", "what was the betrayal?"],
        bodies: ["betrayal in a relationship changes the heartbreak — because you're grieving the person and the person they turned out to be.", "betrayal adds a disorientation to heartbreak — not just loss but the shock of who they were."],
        choiceSets: [["they cheated", "they lied about something important", "they showed me who they really were in a way i can't come back from"], ["infidelity", "deception or hidden things", "a reveal that changed everything"]] },
      { titles: ["how long did you carry it?", "what was the situation?"],
        bodies: ["unrequited love carries its own special weight — it's hope that never got to be tested.", "when feelings weren't returned, you grieve something that never existed but was very real to you."],
        choiceSets: [["i told them and it didn't go anywhere", "i never told them and now i can't", "they knew and it wasn't mutual"], ["disclosed, wasn't reciprocated", "undisclosed and now over", "they knew and chose differently"]] },
      { titles: ["how did you drift?", "what happened to the connection?"],
        bodies: ["drifting apart doesn't have a clean ending — which can make it harder to process because there's nothing to point to.", "slow fade heartbreak is grief for something that ended without an ending."],
        choiceSets: [["life circumstances took us different directions", "we stopped making effort and neither of us caught it", "the feeling faded and we both knew it"], ["geography or life phase separated us", "mutual neglect until it was gone", "the love faded and we acknowledged it"]] }
    ],
    l2: [
      [
        { titles: ["they ended it", "they left"],
          bodies: ["being left is a particular kind of heartbreak — you didn't choose this ending, which removes control from the experience.", "when someone ends it, there's the grief of the loss and the grief of not having a say."],
          choiceSets: [["suddenly, without warning", "after conflict that had been building", "i didn't see it coming and now i'm looking back wondering how i missed it"], ["sudden", "after escalating conflict", "didn't see it coming"]] },
        { titles: ["you ended it", "you chose to leave"],
          bodies: ["grief after ending something you chose to end is real and often misunderstood. you're allowed to be devastated by something you decided was necessary.", "choosing to end something doesn't mean you don't grieve it."],
          choiceSets: [["i knew it was right but it still destroys me", "i'm second-guessing myself now", "i ended it but i still love them"], ["right choice, still devastating", "doubt creeping in after the decision", "loving someone you had to leave"]] },
        { titles: ["it just fell apart", "no single ending"],
          bodies: ["relationships that collapse without a clear moment are harder to process because there's no event to point to, no conversation to replay.", "mutual collapse grief has no villain and no clear cause — which makes it harder to land."],
          choiceSets: [["it stopped working and neither of us could fix it", "we tried and it still fell apart", "it ended without either of us deciding to end it"], ["couldn't be saved despite wanting to", "tried everything before the collapse", "passive ending without a decision"]] }
      ],
      [
        { titles: ["infidelity", "they cheated"],
          bodies: ["cheating adds layers to heartbreak — betrayal, loss, self-doubt, the revision of memories. it's not just one wound.", "infidelity heartbreak includes grief for the relationship and grief for the reality you thought you were in."],
          choiceSets: [["i just found out", "i've known for a while and i'm still processing", "i'm not sure what to do about the relationship"], ["just discovered", "processing something i've known", "in limbo about what comes next"]] },
        { titles: ["they lied", "deception changed everything"],
          bodies: ["discovering deception in a relationship makes you question not just the future but the entire past — what was real?", "deception heartbreak involves grieving both the loss and the version of the relationship you thought you had."],
          choiceSets: [["it was a lie about something important to me", "i'm not sure how much of it was real now", "they had a whole thing hidden from me"], ["significant deception", "questioning the reality of the whole relationship", "hidden life or significant secret"]] },
        { titles: ["they revealed themselves", "a reveal that changed everything"],
          bodies: ["sometimes a person shows you who they really are in a single moment and you can't unsee it. that's its own kind of loss.", "grieving who you thought someone was, alongside the relationship, is compound grief."],
          choiceSets: [["they said or did something that showed me who they really are", "i saw a side of them i can't reconcile with who i thought they were", "i fell for who i thought they were, not who they are"], ["a revealing moment that can't be taken back", "irreconcilable new information about them", "gap between who i thought and who they are"]] }
      ],
      [
        { titles: ["you told them", "you said something and it didn't go anywhere"],
          bodies: ["having said something and being unrequited is a specific kind of courage that still hurts.", "disclosure took guts and the pain of it not going anywhere is real."],
          choiceSets: [["they said no or let me down gently", "they didn't respond the way i hoped and it was awkward", "it changed things between us permanently"], ["gentle rejection", "awkward or ambiguous response", "changed the dynamic permanently"]] },
        { titles: ["you never told them", "carried it and now it's over"],
          bodies: ["unrequited love that was never said out loud has its own grief — for what might have been if you'd said something, for the feelings you held alone.", "carrying it alone for a long time means you've been grieving in private the whole time."],
          choiceSets: [["the window closed without my saying anything", "i regret not saying something", "i'm relieved i never said it but it still hurts"], ["window closed", "regret about not saying it", "relief and pain simultaneously"]] },
        { titles: ["they knew and chose otherwise", "mutual awareness, no reciprocation"],
          bodies: ["knowing they knew and still chose differently is a particular kind of clarity that still hurts.", "when it's known but not returned, there's no ambiguity — just the clear answer you didn't want."],
          choiceSets: [["they knew how i felt and didn't feel the same", "they chose someone else while knowing i was there", "it was acknowledged and still didn't go anywhere"], ["clear knowledge, clear non-reciprocation", "chose someone else knowingly", "acknowledged unrequited"]] }
      ],
      [
        { titles: ["life circumstances separated you", "geography or life phase"],
          bodies: ["drifting because of circumstances — different cities, different life stages — is heartbreak that has no villain. just life going in different directions.", "circumstantial drift is a particular kind of loss because neither person did anything wrong."],
          choiceSets: [["we went to different places and the distance grew", "life stage differences pulled us apart", "we both got busy and never got un-busy"], ["physical distance", "life stage divergence", "mutual drift through busyness"]] },
        { titles: ["mutual neglect until it was gone", "neither of you caught it in time"],
          bodies: ["when both people stop investing and neither catches it before it's too late, there's grief for the relationship and for the thing neither of you did to save it.", "mutual drift without intentional ending is sometimes the saddest — because there was probably a moment where it could have been caught."],
          choiceSets: [["we both stopped reaching out", "we should have had a conversation we never had", "i don't think either of us realized until it was already gone"], ["simultaneous withdrawal", "the conversation that didn't happen", "awareness came too late"]] },
        { titles: ["the love faded", "it just stopped"],
          bodies: ["love fading without a betrayal or a fight is disorienting because there's nothing to blame — it just went.", "grieving something that ended quietly is harder than grieving something that ended with heat."],
          choiceSets: [["it just ran out", "we acknowledged it wasn't there anymore", "i'm not sure which of us knew first"], ["love depleted without drama", "acknowledged mutual fading", "uncertain who noticed first"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need most right now?", "what would help?"],
        bodies: ["the relationship ended. what's most useful to take from this?", "heartbreak needs somewhere to land. what fits?"],
        choiceSets: [["just to be heard in this pain", "how to get through the early part", "whether i should try to reach out or not"], ["acknowledgment of the pain", "survival tools for the worst of it", "whether contact makes sense"]] },
      { titles: ["what do you need from this?", "what fits most?"],
        bodies: ["betrayal added to heartbreak. what's most useful?", "you were let down on top of losing them. what do you need?"],
        choiceSets: [["just to have the betrayal acknowledged on top of the loss", "how to stop loving someone who hurt you", "how to trust again after this"], ["acknowledgment of the compound hurt", "how to disentangle love from betrayal", "how to rebuild trust"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["feelings that were never returned. what's most useful?", "unrequited love is its own grief. what fits?"],
        choiceSets: [["just to have these feelings validated — they were real even if they weren't returned", "how to let go of something that never started", "how to recover the friendship if there was one"], ["validation of real feelings", "how to release and move forward", "whether the friendship is salvageable"]] },
      { titles: ["what do you need most?", "what fits?"],
        bodies: ["you drifted apart. what's most useful to take from this?", "slow-fade heartbreak is its own thing. what do you need?"],
        choiceSets: [["whether it's too late to reach out", "how to grieve something that didn't have a clear ending", "how to stop missing someone who's still there"], ["whether reconnection is possible", "how to process an ending without an end", "how to carry missing someone who isn't gone"]] }
    ],
    finals: [
      { titles: ["heartbreak is real — even when it was necessary", "you're allowed to be destroyed by this"],
        bodies: ["the end of a relationship is a real loss, regardless of why it ended, who chose it, or what the circumstances were. you're grieving a person, a shared life, a future you imagined, and a version of yourself that existed in that relationship. that's a lot to lose at once.", "heartbreak doesn't follow logic. knowing why something ended doesn't stop the pain. knowing it was necessary doesn't make it hurt less. give yourself permission to be in the grief without needing it to make sense right away."],
        tips: ["stop checking their social media. seriously. it keeps you in a relationship that has ended and extends the grief significantly", "let yourself go through the ugly stages — the bargaining, the anger, the going back over everything. don't skip them by being 'mature'", "tell someone what happened. heartbreak done alone is much heavier than heartbreak shared", "the goal isn't to stop loving them — it's to eventually be okay with loving someone who isn't in your daily life anymore. that takes time."] },
      { titles: ["betrayal plus heartbreak is a compound wound", "you're grieving the loss and the person they turned out to be"],
        bodies: ["when heartbreak includes betrayal, you're not just grieving the relationship — you're also grieving who you thought they were, and the version of your past that you now have to revise. memories you thought were real need to be re-evaluated. that's disorienting and exhausting on top of the grief.", "betrayal heartbreak often comes with self-doubt — what did i miss? how could i not know? that's a normal response to a destabilizing revelation. the answer is usually that you trusted someone who wasn't trustworthy. that's on them."],
        tips: ["don't make permanent decisions about people or relationships while in the acute phase. betrayal distorts the signal", "your self-trust can recover from this — but it often needs time and sometimes support to do so", "allow the anger that comes with betrayal. it's appropriate. just find constructive places to put it", "if the betrayal included abuse, deception about something significant, or patterns of manipulation, please talk to someone who specializes in relationship trauma"] },
      { titles: ["your feelings were real even if they weren't returned", "unrequited doesn't mean invalid"],
        bodies: ["loving someone who doesn't love you back is not a failure — it's a statement of your capacity to love, and those feelings were completely real. the fact that they weren't returned doesn't make them smaller or wrong. you felt what you felt, and you held it, and that took something from you.", "unrequited love is a specific grief: for what might have been, for the version of the relationship you imagined, for the feelings you held that had nowhere to land. all of that deserves acknowledgment."],
        tips: ["let yourself feel the grief of what didn't happen. you're not being dramatic — you lost a possible future", "if contact is still happening, honest distance is usually kinder than ambiguous friendship while the feelings are still fresh", "the feelings usually fade with time and distance. not by forcing them away but by allowing new experiences in", "there's no timeline for this. don't let anyone tell you how long is reasonable"] },
      { titles: ["there's grief in endings that happen quietly", "drifting apart is still losing someone"],
        bodies: ["when something ends without drama — without a clear fight or decision — the grief can be harder to locate and process. there's no moment to point to, no conversation that ended things. just a slow withdrawal until one day the distance is too far. that's still a loss, even without an event.", "slow-fade heartbreak often carries guilt — should i have caught it? should i have reached out sooner? maybe. but the drift was usually mutual and the awareness usually came after the fact, for both people."],
        tips: ["if you want to reach out, do it once — plainly, without expectation. 'i miss you' is always allowed", "if reconnection isn't possible or wanted, grieve it clearly. give it the attention that a dramatic ending would have forced you to", "notice who is actually in your life right now. it's easy to mourn absent people while neglecting present ones", "time and new investment in other relationships is what moves this grief. it doesn't stay this heavy."] }
    ]
  },

  exhaustion: {
    root: {
      titles: ["what kind of exhausted?", "where's the exhaustion coming from?"],
      bodies: ["exhaustion has different sources. let's figure out which one this is.", "your system is running low. let's find the source."],
      choiceSets: [
        ["physically — my body is done", "mentally — i can't think clearly", "emotionally — i've got nothing left", "all of it at once"],
        ["body exhaustion", "cognitive or mental exhaustion", "emotional depletion", "total across all dimensions"]
      ]
    },
    l1: [
      { titles: ["what's been happening physically?", "what's the body situation?"],
        bodies: ["physical exhaustion is your body sending a clear message: it needs rest. not optimization, not better habits — rest.", "the body knows when it's hit the wall. the signal is usually pretty clear."],
        choiceSets: [["not sleeping enough or not sleeping well", "working or moving my body too hard", "something health-related is draining me"], ["sleep deprivation", "physical overexertion", "health-related physical drain"]] },
      { titles: ["what's the mental load like?", "what's been happening cognitively?"],
        bodies: ["mental exhaustion — from information overload, complex decisions, sustained concentration — is as real as physical exhaustion.", "the brain doing hard cognitive work gets tired just like a muscle does."],
        choiceSets: [["too much information and too many decisions", "sustained concentration on hard things", "anxiety and overthinking have worn me out"], ["decision and information overload", "prolonged focused work", "worry as cognitive exhaustion"]] },
      { titles: ["what's been draining emotionally?", "what's been happening with your emotional energy?"],
        bodies: ["emotional exhaustion is what happens when you've been doing the emotional heavy lifting for too long — for yourself, for others, or both.", "the emotional resources are finite. when they run out, everything feels harder."],
        choiceSets: [["supporting others without support myself", "processing my own difficult feelings", "high-intensity emotional situations that won't let up"], ["emotional labor without reciprocation", "heavy personal emotional processing", "sustained emotional intensity"]] },
      { titles: ["all of it?", "every dimension is depleted?"],
        bodies: ["total exhaustion — body, mind, and emotional reserves all at once — is the hardest kind because there's nothing left to recover with.", "when everything is depleted simultaneously, the recovery needs to be comprehensive, not piecemeal."],
        choiceSets: [["everything is running on empty", "i'm depleted in every way and don't know where to start", "i've been managing multiple demanding things for too long"], ["complete across-the-board depletion", "don't know where to even begin addressing it", "sustained multi-demand overload"]] }
    ],
    l2: [
      [
        { titles: ["not sleeping or not sleeping well", "sleep is the problem"],
          bodies: ["sleep deprivation compounds everything — cognition, emotion, physical recovery all degrade without adequate sleep. it's foundational.", "you can't outrun bad sleep. everything else is harder when you're not sleeping enough."],
          choiceSets: [["i can't fall asleep", "i fall asleep but wake up and can't get back to sleep", "i'm not giving myself enough time to sleep"], ["onset insomnia", "maintenance insomnia", "not prioritizing sleep time"]] },
        { titles: ["physical overexertion", "pushing the body too hard"],
          bodies: ["overexertion without adequate recovery leads to accumulating physical fatigue that starts affecting everything.", "the body can sustain a lot — but it needs recovery built in. without it, it starts breaking down."],
          choiceSets: [["too much exercise without enough rest", "physical work demands that exceed what i can sustain", "i don't give myself recovery time"], ["training or exercise overload", "work demands on the body", "recovery deficit"]] },
        { titles: ["health-related physical drain", "something health-related is the cause"],
          bodies: ["chronic illness, recovery from illness or injury, or undiagnosed health issues can create sustained physical exhaustion that's hard to address without addressing the underlying cause.", "when health is draining you physically, the exhaustion is often the symptom, not the problem."],
          choiceSets: [["a chronic condition that drains me", "i'm recovering from something and it's taking longer than i expected", "i don't know what's causing the tiredness but i'm always exhausted"], ["chronic condition", "recovery taking longer than expected", "unexplained persistent fatigue"]] }
      ],
      [
        { titles: ["information and decision overload", "too much to process"],
          bodies: ["the mental load of too much information and too many decisions is genuine cognitive exhaustion. the brain has bandwidth limits.", "decision fatigue is real — the more decisions you make, the harder each subsequent one becomes."],
          choiceSets: [["too many things competing for my attention", "i have to make too many decisions with too little time", "my brain is overloaded and can't process one more thing"], ["attention competition", "decision volume", "cognitive overload"]] },
        { titles: ["sustained concentrated work", "hard cognitive work for too long"],
          bodies: ["sustained concentration depletes the brain's glucose and neurotransmitters. it's not a character flaw — it's physiology.", "prolonged focused work requires recovery just like prolonged physical work does."],
          choiceSets: [["intense intellectual work for long stretches", "concentration that never gets a real break", "creative work that's depleted my ability to produce anything"], ["intellectual intensity without breaks", "no genuine cognitive rest built in", "creative depletion"]] },
        { titles: ["worry as exhaustion", "anxiety has worn you out mentally"],
          bodies: ["chronic anxiety and overthinking are cognitively expensive. the brain running worst-case scenarios constantly is running the same circuits over and over, depleting resources.", "mental exhaustion from anxiety is often overlooked because it doesn't look like 'work' — but it costs just as much."],
          choiceSets: [["anxious thinking that won't stop", "ruminating on the same things repeatedly", "the mental noise is louder than anything else and i can't turn it off"], ["constant anxiety consuming cognitive resources", "rumination loop", "cognitive noise overwhelming everything else"]] }
      ],
      [
        { titles: ["supporting others without support yourself", "emotional labor without reciprocation"],
          bodies: ["being the support for others — without equivalent support coming back — depletes emotional resources faster than almost anything.", "emotional labor is real labor. it costs. and when it's unreciprocated, it costs more."],
          choiceSets: [["everyone comes to me but nobody checks on me", "i give support i don't receive", "i'm the anchor and i'm exhausted from holding everyone up"], ["everyone's support person, nobody supporting me", "unreciprocated emotional labor", "anchor role without support"]] },
        { titles: ["processing your own heavy stuff", "your own emotional processing is depleting you"],
          bodies: ["working through your own difficult experiences, grief, or feelings is work — real emotional work that costs real emotional energy.", "when you're in the middle of processing something difficult, the depletion is the processing."],
          choiceSets: [["grief or loss i'm working through", "difficult feelings i've been sitting with for a while", "a hard period that's requiring a lot of emotional processing"], ["active grief processing", "sustained difficult feelings", "emotionally intensive period"]] },
        { titles: ["high-intensity emotional situations", "emotional intensity that won't let up"],
          bodies: ["sustained emotional intensity — conflict, crisis, relational difficulty — depletes the same way prolonged physical intensity does.", "when the emotional environment is consistently high-stakes, there's no genuine recovery between demands."],
          choiceSets: [["ongoing conflict or difficult dynamic", "a crisis or emergency that's been going on", "high-stakes emotional situations that keep coming"], ["persistent interpersonal difficulty", "ongoing crisis", "repeated high-stakes emotional events"]] }
      ],
      [
        { titles: ["completely depleted across everything", "nothing left in any tank"],
          bodies: ["total exhaustion — physical, mental, emotional — means the system is out of reserves. recovery from this isn't a matter of a good night's sleep or a day off.", "when all reserves are gone simultaneously, something significant has to change — not just be managed differently."],
          choiceSets: [["i've been running on fumes for a long time", "i don't know which area to address first", "i need rest in every way and don't know how to get it"], ["long-term running on empty", "paralyzed about where to start", "need for comprehensive rest without knowing how to access it"]] },
        { titles: ["don't know where to start", "everything needs attention and you have nothing"],
          bodies: ["when everything is depleted, figuring out where to start can itself be paralyzing — which is its own kind of exhausting.", "the decision about what to address first when everything is depleted is genuinely hard."],
          choiceSets: [["too many things need attention and i can't prioritize", "i have responsibilities that won't wait even though i need to stop", "i don't even have the energy to figure out what i need"], ["paralyzed by competing needs", "obligations don't pause for my depletion", "too depleted to even assess what's needed"]] },
        { titles: ["sustained multi-demand overload", "too many things demanding too long"],
          bodies: ["when multiple demanding things have been running simultaneously for a long time, the accumulation is its own damage — beyond what any single demand would cause.", "multiple sustained demands compound. they're not additive — they multiply."],
          choiceSets: [["work, relationships, and personal stuff all demanding at once", "i've been sustaining this pace for months", "i don't see when it gets to be less"], ["demands across multiple life areas simultaneously", "sustained for months", "no visible reduction in sight"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need most?", "what would help right now?"],
        bodies: ["physical exhaustion needs physical rest. what's most useful to take from this?", "your body is done. what fits best?"],
        choiceSets: [["permission to actually rest — no guilt", "how to address the cause", "how to function while i'm exhausted until i can get rest"], ["permission to stop", "addressing the source", "survival strategies for the interim"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["mental exhaustion needs cognitive rest. what's most useful?", "your brain is worn out. what fits?"],
        choiceSets: [["how to actually give my brain a break", "how to reduce the cognitive load", "how to function when i'm mentally depleted"], ["genuine cognitive rest", "reducing the incoming load", "coping while still under the load"]] },
      { titles: ["what fits most right now?", "what do you need?"],
        bodies: ["emotional exhaustion needs emotional rest. what's most useful?", "your emotional reserves are empty. what fits?"],
        choiceSets: [["permission to stop giving emotionally for a bit", "how to get support instead of giving it", "how to hold my own emotions when i have nothing left"], ["permission to withdraw from emotional labor", "how to receive instead of give", "how to hold myself when depleted"]] },
      { titles: ["what do you need most right now?", "what would help?"],
        bodies: ["total exhaustion needs total rest. what's most useful?", "you're depleted everywhere. what fits?"],
        choiceSets: [["where to start when everything needs attention", "permission to stop everything that can be stopped", "how to survive until i can actually recover"], ["triage guidance", "permission to stop", "survival strategies"]] }
    ],
    finals: [
      { titles: ["your body needs rest — not optimization", "physical exhaustion is the body asking for something simple"],
        bodies: ["physical exhaustion is the clearest signal your body sends: stop and recover. not 'do this better' or 'be more efficient' — just rest. the body doesn't overcommunicate. when it says it's done, it means it.", "the culture of pushing through physical exhaustion has made it seem like resting is the failure. it isn't. resting is the recovery that makes everything else possible."],
        tips: ["sleep is the first priority. nothing else recovers properly without it", "if sleep is the problem, address the sleep before trying to address anything else", "give yourself actual time off — not 'productive rest' but genuine nothing. your body needs it", "if you've been physically exhausted for a long time and rest doesn't fix it, please see a doctor. chronic fatigue has medical causes worth ruling out"] },
      { titles: ["your brain needs rest too — actual rest, not just switching tasks", "cognitive exhaustion is as real as physical exhaustion"],
        bodies: ["mental exhaustion is real, physiological, and takes real recovery — not just a change of activity, but genuine cognitive rest. switching from hard work to social media is not rest. your brain is still processing. it needs actual quiet.", "the brain has limits on sustained attention, decision-making, and processing. when those limits are hit, performance and mood both degrade. this isn't weakness — it's how the brain works."],
        tips: ["real cognitive rest means no screens, no demands, no problem-solving — not just switching from one to another", "build actual breaks into heavy cognitive work — 10-15 minutes of nothing every 90 minutes changes what's sustainable", "reduce incoming information: news, notifications, content. less in = more capacity for what matters", "sleep is critical for cognitive recovery. everything else is secondary"] },
      { titles: ["emotional rest is real rest — and you're allowed to take it", "you can't keep giving what you don't have"],
        bodies: ["emotional exhaustion means you've been doing emotional work — for yourself or others — at a pace that doesn't leave enough for recovery. that's not a character flaw. it's unsustainable, and your system is telling you so.", "resting emotionally means temporarily stepping back from emotional labor. not forever. just enough to refill. you can't give from empty and you shouldn't have to."],
        tips: ["it is okay to not be available for others' emotional needs for a period. this is not abandonment — it's sustainability", "find something that emotionally replenishes you rather than drains you. time alone, time in nature, something that asks nothing of you", "tell the people who depend on you that you're running low. most people respond better than expected to honest disclosure", "if emotional exhaustion is chronic, look at whether the balance of giving and receiving in your relationships is sustainable long-term"] },
      { titles: ["total depletion needs total recovery — this isn't a patch job", "when everything's gone, something significant has to change"],
        bodies: ["total exhaustion — when physical, mental, and emotional reserves are all depleted simultaneously — is serious. it doesn't resolve through better efficiency or small adjustments. it requires actual structural change: less load, more recovery, and something that refills you across all dimensions.", "you've been running a machine without stopping for maintenance, and now multiple parts need attention at once. the instinct is to try to manage this — to find the most efficient way to keep going. the better instinct is to actually stop what can be stopped."],
        tips: ["triage: what absolutely has to happen vs. what can wait or be delegated? cut everything in the second category", "physical recovery is foundational — sleep, food, some movement. everything else is built on that", "if nothing can be stopped because of responsibilities, talk to someone who can help you figure out what can give", "if you've been this depleted for a long time, please talk to a doctor or therapist. this level of depletion sometimes has a medical component and always benefits from support"] }
    ]
  },

  rejection: {
    root: {
      titles: ["what kind of rejection?", "who or what rejected you?"],
      bodies: ["rejection hits differently depending on the source. let's figure out what this is.", "rejection is one of the sharpest human experiences. let's get specific."],
      choiceSets: [
        ["romantic rejection", "social or friend rejection", "professional rejection", "rejection from family"],
        ["someone i had feelings for", "a group or friend situation", "career, job, or creative rejection", "family not accepting me"]
      ]
    },
    l1: [
      { titles: ["what happened romantically?", "tell me about it"],
        bodies: ["romantic rejection activates some of the deepest social pain because it combines desire, vulnerability, and identity all at once.", "being turned down by someone you have feelings for is one of the sharper pains. it deserves to be taken seriously."],
        choiceSets: [["i told them how i feel and they didn't feel the same", "they ended things with me", "i got rejected before things even started"], ["disclosed and it wasn't reciprocated", "ended by them", "rejected at the beginning stages"]] },
      { titles: ["what happened socially?", "what was the friend or group situation?"],
        bodies: ["social rejection — being excluded, left out, or let go by a group — activates the same neural pathways as physical pain. it's not 'just social'.", "friend and social rejection is underestimated in how much it hurts because adults are supposed to 'move on'. it still hurts."],
        choiceSets: [["i was left out or excluded from a group", "a friendship ended or someone pulled away", "i feel like i don't belong anywhere"], ["explicit exclusion", "a friendship that ended or cooled", "general not-belonging"]] },
      { titles: ["what kind of professional rejection?", "what happened at work or with something you created?"],
        bodies: ["professional rejection — being passed over, fired, rejected from opportunities — is hard because it feels like a judgment of your worth and capability.", "rejection in the professional realm mixes identity with livelihood, which makes it particularly loaded."],
        choiceSets: [["a job application or opportunity i didn't get", "something i created was rejected", "i was passed over or dismissed at work"], ["hiring or opportunity rejection", "creative rejection", "workplace dismissal or being passed over"]] },
      { titles: ["what's the family rejection?", "what happened?"],
        bodies: ["family rejection is some of the deepest rejection because it comes from the people who are 'supposed' to accept you unconditionally.", "being rejected by family for who you are, or being excluded from family dynamics, cuts differently from other rejections."],
        choiceSets: [["family doesn't accept who i am", "i've been cut out or excluded from family", "family has rejected my choices or path"], ["non-acceptance of identity", "exclusion or estrangement", "rejection of choices or values"]] }
    ],
    l2: [
      [
        { titles: ["you said how you feel and they didn't feel the same", "unrequited disclosure"],
          bodies: ["it took courage to say something. that's real regardless of how it landed.", "being honest about feelings and having them not be returned is a specific kind of pain that comes with doing the right thing."],
          choiceSets: [["they were kind about it", "they weren't kind about it", "the rejection changed the dynamic between us"], ["kind rejection", "unkind rejection", "relationship changed by the disclosure"]] },
        { titles: ["they ended things", "being broken up with"],
          bodies: ["being ended is particularly hard because it removes choice from the equation — you didn't get to decide this was over.", "grief after being ended is both about the person and about the loss of agency."],
          choiceSets: [["suddenly and without much warning", "after a difficult period that had been building", "they gave reasons that don't feel adequate"], ["sudden ending", "ending after sustained difficulty", "reasons that don't account for the pain"]] },
        { titles: ["rejected before things even started", "turned down early"],
          bodies: ["early rejection is its own particular sting — the hope was there and got cut off before it became anything.", "being rejected at the beginning stages means you're grieving something that never got to exist."],
          choiceSets: [["they weren't interested from the start", "it started well and ended quickly", "mixed signals and then nothing"], ["clear disinterest", "started then stopped", "ambiguous then gone"]] }
      ],
      [
        { titles: ["explicit exclusion", "being left out"],
          bodies: ["being explicitly excluded — not invited, not included, actively left out — is one of the most direct forms of social rejection.", "exclusion sends a clear message that you weren't wanted. that clarity doesn't make it easier."],
          choiceSets: [["left out of something specific", "systematically excluded from a group or dynamic", "i found out i was being excluded and it hurt more than the exclusion itself"], ["one specific exclusion", "pattern of being left out", "finding out indirectly made it worse"]] },
        { titles: ["a friendship that ended", "someone pulled away"],
          bodies: ["friendships ending — especially without explanation — are their own grief. you didn't get to choose this.", "when a friend pulls away without a clear reason, the confusion compounds the hurt."],
          choiceSets: [["they ended the friendship explicitly", "they just stopped responding and faded out", "something happened and we never recovered"], ["explicit ending", "passive ghost or fade", "an event that permanently changed things"]] },
        { titles: ["not belonging anywhere", "no group that's yours"],
          bodies: ["the feeling of not belonging anywhere is its own kind of loneliness — not just rejection from one place but a general sense of not having a community.", "not having a group or community where you feel you fit is one of the more painful social experiences."],
          choiceSets: [["i've never really found my people", "i've been rejected from multiple groups", "every group i try doesn't stick"], ["never found a place", "multiple rejections accumulating", "trying but nothing sticking"]] }
      ],
      [
        { titles: ["hiring or opportunity rejection", "didn't get the job or opportunity"],
          bodies: ["being passed over for a job or opportunity — especially when you invested in it — is painful in a specific way because it feels like a judgment of your capability.", "rejection from an opportunity you cared about hurts partly because of what you projected onto it."],
          choiceSets: [["i really wanted this specific thing", "i've been rejected from multiple things and it's accumulating", "the reason they gave doesn't match what i thought i offered"], ["high investment in this specific thing", "pattern of rejections wearing me down", "the rationale doesn't make sense to me"]] },
        { titles: ["creative rejection", "work you made got turned down"],
          bodies: ["creative rejection is uniquely personal because what got turned down came from you — not just your labor, but your creative self.", "having something you made rejected feels like you were rejected."],
          choiceSets: [["something i put real work into", "something that represents who i am creatively", "rejected by someone whose opinion mattered to me"], ["significant creative investment", "identity-tied creative work", "rejection from someone whose judgment carries weight"]] },
        { titles: ["dismissed or passed over at work", "workplace rejection"],
          bodies: ["being passed over for promotion, dismissed from a role, or overlooked at work affects both livelihood and identity.", "workplace rejection is loaded because it mixes professional worth with financial stability."],
          choiceSets: [["passed over for a promotion i thought i deserved", "dismissed or pushed out", "my contributions aren't being recognized"], ["passed over for advancement", "pushed out of a role or position", "invisible or undervalued"]] }
      ],
      [
        { titles: ["family doesn't accept who you are", "identity rejection from family"],
          bodies: ["being rejected by family for who you fundamentally are — your sexuality, gender, beliefs, identity — is one of the deepest wounds. the people who were supposed to love you unconditionally have placed a condition.", "family rejection for identity is a specific kind of loss: of the family you thought you had and of the acceptance you were owed."],
          choiceSets: [["they don't accept my sexuality or gender identity", "they reject my beliefs or values", "they won't accept something fundamental about who i am"], ["rejection of sexual or gender identity", "rejection of core beliefs or values", "rejection of some other fundamental aspect of self"]] },
        { titles: ["excluded or cut out from family", "family estrangement"],
          bodies: ["being cut out from family — deliberately or through escalating distance — is grief on top of rejection.", "family estrangement is one of the more lonely experiences because the social expectation is that family is always there. when it isn't, there's grief and often shame."],
          choiceSets: [["i've been cut off by family members", "i'm excluded from family dynamics or events", "i've had to cut off family for my own wellbeing"], ["actively cut off by family", "ongoing exclusion from family life", "self-protective estrangement"]] },
        { titles: ["family rejects your choices or path", "family doesn't support how you're living"],
          bodies: ["when family rejects the choices you've made — career, relationships, lifestyle — it creates a split between who you are and who they want you to be.", "rejection of choices feels like rejection of the version of yourself who made those choices."],
          choiceSets: [["my career or life direction", "who i'm with or my relationship", "how i live or what i value"], ["professional or life path rejection", "relationship rejection", "lifestyle or values rejection"]] }
      ]
    ],
    l3: [
      { titles: ["what do you need from this?", "what would help most?"],
        bodies: ["romantic rejection is sharp. what's most useful to take from this?", "being turned down by someone you wanted hurts in a specific way. what fits?"],
        choiceSets: [["just to have this pain acknowledged", "how to actually move through it", "whether i did anything wrong"], ["acknowledgment", "how to process and move on", "whether this is on me"]] },
      { titles: ["what do you need most?", "what fits?"],
        bodies: ["social rejection is real pain. what's most useful?", "being excluded or rejected socially matters. what do you need?"],
        choiceSets: [["just to know this hurts as much as any other rejection", "how to find people who actually want me there", "how to not let this define my self-worth"], ["validation of the pain", "how to find real belonging", "protecting self-worth from this"]] },
      { titles: ["what would help most?", "what do you need?"],
        bodies: ["professional rejection hits your sense of capability. what's most useful?", "being turned down for something career or creativity related. what fits?"],
        choiceSets: [["just to have the sting acknowledged — this actually hurts", "how to not let it shake my confidence", "whether there's anything useful to learn from it"], ["acknowledgment", "confidence protection", "whether it contains useful information"]] },
      { titles: ["what do you need most?", "what fits?"],
        bodies: ["family rejection is one of the deepest hurts. what's most useful to take from this?", "the people who were supposed to accept you most. what do you need?"],
        choiceSets: [["just to have this acknowledged as genuinely devastating", "how to grieve a family that doesn't accept me", "how to build belonging outside of what family was supposed to provide"], ["acknowledgment of the depth of this pain", "how to grieve the family you should have had", "how to build a chosen family or alternative belonging"]] }
    ],
    finals: [
      { titles: ["romantic rejection is one of the sharpest pains — and it's supposed to hurt", "being turned down doesn't say who you are"],
        bodies: ["romantic rejection activates some of the deepest human pain because it combines desire, vulnerability, and self-worth all in one moment. when someone doesn't want you back, it's hard not to hear that as a statement about your worth. it isn't.", "rejection from one person is information about compatibility or timing — not information about your value. the person who rejects you is not the authority on whether you are worth loving. they're just one person whose feelings didn't align with yours."],
        tips: ["let yourself feel it. don't perform recovery. it hurts, you're allowed to hurt", "rejection is part of the process of finding the right fit — not evidence that there is no fit", "don't analyze it into the ground. you can ask yourself once whether there's something useful to learn; then let the analysis go", "every person you admire has been romantically rejected. it's not the exceptional ones who avoid it — it's everyone"] },
      { titles: ["social rejection hurts like physical pain — that's not a metaphor", "being excluded or turned down socially is real rejection"],
        bodies: ["social rejection activates the same neural circuits as physical pain. it's not 'just social' — it's one of the most primal pains because belonging used to be survival. being excluded still fires the same ancient alarm.", "social rejection is often underplayed because adults are expected to have thick skin about it. that doesn't make it hurt less. it makes it lonelier, because you feel like you shouldn't be struggling with it."],
        tips: ["don't dismiss or minimize this because it's 'just' social. validate your own pain", "find one person or community where you feel genuinely wanted. even one real connection changes the experience of rejection from others", "repeated social rejection might contain information about fit — places, groups, or types of people where you're not a match — not about whether you belong anywhere", "chosen community is real community. online, niche groups, people who share something specific — those connections are as valid as any other"] },
      { titles: ["professional rejection is about fit and timing — not verdict", "being turned down for an opportunity isn't a summary of your ability"],
        bodies: ["professional and creative rejection hurts partly because you've invested — you put yourself in it, imagined yourself there, hoped. the rejection lands on all of that investment.", "what's being assessed in a job interview, a creative submission, or a professional opportunity is fit, timing, context, and often luck. not your total value as a person. those are enormously different things that feel the same in the moment."],
        tips: ["ask for feedback if it's available — not to argue, but for information you can use", "one rejection is a data point, not a verdict. multiple rejections from different kinds of things might be worth examining; one rejection from one opportunity is just one thing", "protect your creative or professional confidence by remembering the rejections that famous, successful people you admire have absorbed", "keep moving. the worst thing professional rejection does is stop you from trying again, which is when it actually becomes a limit"] },
      { titles: ["family rejection is the deepest kind — because it was supposed to be different", "you deserved acceptance you didn't get"],
        bodies: ["being rejected by family — for who you are, for choices you've made, through estrangement — is among the most painful human experiences because family is supposed to be the baseline of belonging. when that baseline is missing or conditional, it creates a particular kind of grief and loneliness.", "you didn't do anything wrong by being who you are. family rejection is a failure of the family, not of you — even when it doesn't feel that way. you deserved unconditional acceptance. not getting it is a genuine loss."],
        tips: ["grieve the family you should have had. that grief is real even if the family is still alive", "chosen family is real family. the people who accept you as you are have given you something biological family was supposed to give", "if the rejection is about your identity, find community with others who share that identity. representation and belonging exist outside of biological family", "therapy for family rejection and estrangement is specifically valuable — it helps you process the grief and rebuild a sense of belonging that isn't conditional on people changing"] }
    ]
  }

};
