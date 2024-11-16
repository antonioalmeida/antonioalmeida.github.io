---
author: "António Almeida"
date: 2024-11-16
linktitle: "finding-alignment-in-large-software-teams"
menu:
  main:
    parent: tutorials
title: Finding Alignment in Large Software Teams
weight: 10

---

Here's the scenario: you're a software engineer in a large team (7-12 people). The team has different levels of formal education, seniority, and naturally, different opinions based on previous experiences (and fair share of bad habits). 

The amount of work being done in parallel can be overwhelming for any one person to keep track of. You may find yourself reviewing someone's work (e.g., a PR) and thinking:

> "This flow should be unit tested instead of integration tested"

> "We should not duplicate the behaviour of X in Y"

> "There's not enough context in this PR, we need a more complete description of the solution and its tradeoffs (...)"

> *Insert "obvious" engineering dogma (...)*

"I thought we talked about this?" you think to yourself. Well, you probably didn't, or you did when not everyone was in the room, or you did but it was too long ago and since then people joined the team. 

Either way, it doesn't matter now.

How do you solve this? Finding alignment on quality standards, engineering practices, and architectural decisions is hard when everyone is spread thin and the communication overhead of a 10 person team is no joke.

You have a few options here:

## "I'll fix it myself"

Don't do this. 

There are 2 main reasons for producing "low quality work" [1]:

1. Lack of skill: the person doesn't know what they're doing (yet)
1. Lack of ownership: the person does know what they're doing, but doesn't care enough to do it properly.

In either way, taking over won't help you in the long term. If you take over:

1. They won't learn anything. The same thing will happen next time. 
    - Instead, offer to pair with them.
1. The more people are able to influence decisions that affect them, the greater their sense of ownership will be. If you take over, nothing changes. 
    - Perhaps taking a less optimal decision will help with accountability next time. Consider a "hands-off" approach.

[1] Whatever that means in your context.

## "Correction bombardment"

Treat this work as a one time problem. 

List all of your concerns explicitly, regardless of nature or severity. You'll most likely end up with a bombardment of comments ranging from variable naming (nitpic), to finding bugs in the idempotency implementation (crucial) or different way of writing a business logic function (important? i don't know, it's buried in with the rest).

A few things can happen here.

1. Your feedback is taken at face value and the work is updated. 

You got what you wanted. The work is now following your ideas and standards. But what about next time? There's a chance this wasn't the learning experience you envisioned because the underlying principles weren't discussed. It's a gamble.

2. Your opinions are constructively challenged, and a productive discussion unfolds.

This is good. However, this is likely an indication that you're dealing with more senior folks who can generalise the problems at hand and think ahead.

3. You feedback is ignored.

Time to reflect. Are you missing some context? Are people under a deadline you're not aware of? Is this "standard" aligned on with the team or is it just in your head? Are you [bikeshedding](https://www.urbandictionary.com/define.php?term=bikeshedding) or *[austronauting](https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/)* the situation?

## Focus on what matters most

Use the current scenario as an example to build alignment for future problems.

Focus on 1 - 2 things at most. Logs don't follow the standard? Who cares... (right now)? Is there a misalignment on what "idempotency" means? Time to solve this for good.

Put some effort into conveying *why* it's important. Explore alternatives you have considered, detail their tradeoff and how to mitigate them if possible. Reference authoritative sources (does your company have a guideline on this?), but be critical of them. Finish with your *recommendation*.

Here are some things that I've seen help ease this process:
#### Find a common language. 

What "scalable" means to you is likely different from what it for the 20+ YOE engineer who writes compilers for fun, and the junior engineer who just graduated. 

#### Align on the fundamentals

You can't discuss multi region deployments in a room where people don't agree on the difference between a unit test and an integration test.
#### Bring everyone to the discussion table

Remember the accountability thing?
#### Define your assumptions

Building software is hard. You design with failure in mind. But you need to stop somewhere. Find **reasonable** assumptions depending on your requirements which help you avoid the "but what if X fails?" loop.

For example: 
- The Kafka host won't fail at the same time as your DB
- S3 won't be unreachable for longer than 1 minute

#### Don't be afraid to repeat yourself
 
If it feels like you're not being understood, you're probably right. Find a simpler way to say the same thing. Then simpler. I've seen saying the same thing out loud helps with highlighting reasoning problems.
#### Ask others to repeat themselves

If you're not understanding something, changes are others aren't either. 

## It gets better with time

You won't solve everything in a day (or a month). Maybe in a year or two. But it will get better if you focus on the most important problems, and work at it as a team.

It's joyous to work in a high trust, cohesive software team that delivers quality software. You'll know it when you're getting close.

Once things do improve, I've seen some ways that help make sure the gains aren't lost. Perhaps in another blog post.