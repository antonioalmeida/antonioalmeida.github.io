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

Imagine this: you're a software engineer in a large team, with members ranging from 7 to 12 people. The team has diverse backgrounds, levels of experience, and, naturally, different opinions shaped by past experiences (and a fair share of bad habits).

The work being done in parallel can be overwhelming to track. As you review someone's work, like a pull request, you may think:

- "This should be unit tested, not integration tested."
- "We shouldn't duplicate the behavior of X in Y."
- "This PR lacks context; we need a more detailed description of the solution and its trade-offs."
- `<Insert your engineering dogma here...>`

"Didn't we talk about this?" you wonder. Well, maybe not with everyone present, or it was too long ago for newer team members to know.

How do you solve this? Achieving alignment on quality standards, engineering practices, and architectural decisions is tough when everyone is stretched thin, and the communication overhead in a 10-person team is no joke.

## "I'll fix it myself"

Don't do this. There are two key reasons for producing "low-quality work"[^1]:

1. **Lack of skill**: people don't know what they're doing (yet).
2. **Lack of ownership**: people do know what to do but don't care enough to do it properly.

Either way, taking over doesn't help in the long run. If you step in:

1. They won't learn, and the same issue will arise next time.
   - Instead, consider pairing with them.
2. People feel more ownership if they influence the decisions affecting their work. By taking over, nothing changes.
   - Even allowing less optimal decisions can build accountability next time. Consider a "hands-off" approach.

## "Just review it"

Treat this as a one-time issue. List all of your concerns explicitly, from nitpics to bugs to recommendations. Heck, even use [conventional comments](https://conventionalcomments.org/) while you're are it.

Here’s what might happen:

1. **Your feedback is taken at face value**: You got what you wanted. The work is now following your ideas and standards. But what about next time? There's a chance this wasn't the learning experience you envisioned because the underlying principles weren't discussed. It's a short term win but gamble in the future.

2. **Key feedback is constructively challenged**: This is good. However, this is likely an indication that you're dealing with a healthy team and this is a non-issue.

3. **Feedback is ignored**: Time for reflection. Are you missing context? Is there a deadline you're not aware of? Is the "standard" a team agreement or just in your head? Are you [bikeshedding](https://www.urbandictionary.com/define.php?term=bikeshedding) or *[austronauting](https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/)*?

## "Focus on What Matters Most"

Use the scenario to build alignment for future issues. Prioritize one or two critical issues at most. Logs don't follow the standard? Who cares... (right now)? Is there a misalignment on what "idempotency" means? Time to solve this for good.

Explain *why* it's important. Explore alternatives and detail trade-offs, referencing authoritative sources (company guidelines, perhaps) but be critical of them. Finish with your recommendation.

Here are some things that I've seen help ease this process:

- **Find a Common Language**: terms like  "scalable" mean different things for the 20 year veteran who writes compilers for fun versus the junior engineer who just graduated. And it's not a given who's right... 
- **Align on Fundamentals**: You can't discuss multi region deployments in a room where people don't agree on the difference between a unit test and an integration test.
- **Include Everyone in Discussions**: Remember the accountability thing?
- **Define Your Assumptions**: Building software is hard. You design with failure in mind. But you need to stop somewhere. Find **reasonable** assumptions depending on your requirements which help you avoid the "but what if X fails?" loop. [^2]
- **Repeat Yourself**: If you feel misunderstood, you're probably right. Simplify your message. Speaking aloud often highlights reasoning issues.
- **Encourage Repetition**: If you're not getting something, changes are others aren't either.

## It gets better with time

You won't solve everything in a day (or a month). Maybe in a year or two. But it will get better if you focus on the most important problems, and work at it as a team.

It's joyous to work in a high trust, cohesive software team that delivers quality software. 

You'll know it when you get there.

[^1]: Whatever that means in your context.

[^2]: For example: 
    - The Kafka host won't fail at the same time as your DB
    - S3 won't be unreachable for longer than 1 minute