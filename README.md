# Design Challenge

Can you do both design AND code? If so, read on...

## Introduction

We're looking for a _Designer Who Can Code_ or a _Developer Who Can Design_ to help us **style** the many new layouts and features that we're building for Hollowverse.

Our tech stack is React, Next.js and TypeScript.

You can use any styling library or styling solution. Just add it, configure it, and use it.

If you're hired, you will only be responsible for the design, mark-up, and CSS. Another developer will take care of things like API calls, data wiring, complex logic, navigation, validation, etc.

## The Numbers

Hollowverse is growing and is run by an ex-Silicon Valley engineer. It is a public facing website with open source code, so it would look great on a resume or a portfolio. The opportunity for professional and financial growth here is very exciting!

To start, we'll be paying $1,000-$2,000 per month, depending on experience.

We will not be tracking how many or how little hours you'll be working. We don't have deadlines or a timeline. We just expect satisfactory and consistent daily output, which would be visible through your git commits.

If you're interested, complete the challenge below.

## The Challenge

In this challenge you'll style one whole page. This could take one or more days to complete.

(_Note_: anyone is free to complete and submit this challenge but if you would like to ask to be compensated for completing it, talk to us first.)

The code is done in React, Next.js, and TypeScript.

This challenge is hosted as a GitHub template. The first step is for you to create a repository under your account from this GitHub template.

Then

1. `git clone` your repository (which is based on this template)
1. Run `npm i` to install dependencies
1. Run `npm run dev` to start the Next.js development server

The website should now be reachable at `http://localhost:3000` and you are now able to begin styling.

Your job is to style the page which is visible at `http://localhost:3000`.

### Style expectations

Here are some details about the style that we expect from you.

#### It's a mobile app design

Think of this task as **mobile app design**. _Not web design_. 80% of our users are on mobile phones.

#### Avoid media query breakpoints

**Do not use any responsive breakpoints**. Responsive or media-query breakpoints create an unnecessary maintenance overhead for our type of project. We want a single design that stretches and contracts according to the width of the viewport.

The website should look awesome on a mobile screen first. And on a desktop screen second.

#### Don't make the user work

We prefer a design that has minimum interactivity. The user should be able to view most of the content on the page by just scrolling.

#### Inspiration

We like the mobile sites of [MasterClass.com](https://www.masterclass.com/) and [Netflix.com](https://www.netflix.com/). But we do not want white text on a black background because we think that makes the reading experience less legible for the average user. Hollowverse visitors do a lot more reading than visitors of MasterClass or Netflix.

But we like MasterClass and Netflix because their designs feel _human-focused_. Hollowverse should also have a design that is _human-focused_ because it is about the politics, religions, and ideas of celebrities.

To add liveliness to your design, see if you can use some of [these images](https://commons.wikimedia.org/w/index.php?search=elon+musk&title=Special:MediaSearch&go=Go&type=image) in it.

### Explanation of what you see on `http://localhost:3000`

What you see on [`http://localhost:3000`](http://localhost:3000) is the exact same content that you see here: [`https://hollowverse.com/elon-musk`](https://hollowverse.com/elon-musk), but without styling. Your job is to style it. Needless to say, don't make an exact copy of the current style. That's not what we want to hire you for! :)

Hollowverse is a website that collects the politics, religious, and philosophical views of celebrities. We do that by collecting what we call **Facts**.

What you see on the Elon Musk page is mainly a collection of Facts. Each Fact is a unit of data that looks like this:

```json
{
  "type": "quote",
  "date": "2021-09-28",
  "context": "At the Code Conference in Beverly Hills, California, when asked if government should regulate cryptocurrencies, Elon Musk said:",
  "quote": "I would say, 'Do nothing'.",
  "forumLink": "https://discuss.hollowverse.com/t/elon-musk-thinks-the-government-should-not-regulate-crypto/1537",
  "source": "https://www.cnbc.com/2021/09/28/tesla-ceo-elon-musk-says-us-government-should-avoid-regulating-crypto.html",
  "tags": ["Anti Crypto Regulation"],
  "topics": ["Cryptocurrency"]
}
```

The attributes `date`, `context`, `quote`, and `source` are self explanatory.

The other interesting attributes are `type`, `tags`, and `topics`.

`type`: we have different types of Facts, such as `quote` (the celebrity said something), `tweet` (the celebrity tweeted something), `book` (something was said about the celebrity in a book), etc.

`tags`: each Fact has Tags that describe the celebrity based on the Fact. In the example above, we have the tag _Anti Crypto Regulation_ because Elon Musk expressed opposition to government regulation in crypto. Other Facts could have tags that a celebrity is a "Democrat", "Republican", "Believes in Climate Change", and many others.

`topics`: each Fact also belongs to a political or philosophical Topic. The political Topic of the example above is _Cryptocurrency_.

Elon Musk's page is a collection of these Facts, aggregated and displayed by their Topics. The Tags that you see at the top of the page are extracted from the individual Facts.

One last attribute that we didn't talk about is the `forumLink`. We let our users submit Facts on our forum. This link points to the forum thread where the Fact was submitted.

### Submitting your design

Once you've finished your design, reach back out to us with a link to your repository. We'll download it, run it, and evaluate your work. You'll be evaluated on metrics such as your artistic style and the cleanliness of your code.

After we're done with our evaluation, we'll get back to you with the decision.

If you have any questions, you can join [our Discord server](https://discord.gg/7YRGb9Revs) and message `@mk`.

Thank you for your interest in working with us, and good luck!
