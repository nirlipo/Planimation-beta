# Planimation
A tool to animate plans generated from PDDL definitions

Notes to self:
Objects and Constants are treated the same

predicates must have animation annotations of the form
;;animate(<options>)

options include: relative positioning, transformations and transitions,
sprite swaps, more?


actions combine the predicate animations and can also have their
own animation annotation to animate the group of objects acted upon
also the ordering of the animation of predicates


objects and constants use the annotation to denote the image/s
used to represent them, predicates should have the ability to change
this image. there are also sizing options.
