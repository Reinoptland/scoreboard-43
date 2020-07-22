## As a group of players, we want to keep track of our scores, so we know who is ahead in the game

### Plan

What do we need?

- X Scoreboard -> Component -> has some player child components
- X Player -> Component
  - data
    - X score (datatype: number) -> dynamic -> state
    - X name (datatype: string) -> static -> props

## As a group of players, we want the person with the highest score to be displayed at the top of the page

## Lifting state ..?

We will get into this once we have our basic scoreboard

- Track the state in a parent component instead of a child
- To be able to compare, sort, filter

What do we need to do:

1. Lift the state to the parent

- Take out the state from the child components (sorry kid)
- What datatype are we going to use to track the scores?
- Track the state of the players in the parent -> add state
- Pass the state down to the children (as props)

2. A child needs to be able to change the state in the parent

- Need to implement the + button again
- some more steps ...

## Secret other benefits

- Talk about this later
