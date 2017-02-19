import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Link from '../components/Link';
import Todo from '../components/Todo';


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Link', module)
  .add('Active', () => (
    <Link active={true} onClick={action('clicked')}>Some filter</Link>
  ))
  .add('Inactive', () => (
    <Link active={false} onClick={action('clicked')}>Some filter</Link>
  ));

storiesOf('Todo', module)
  .add('to do', () => (
    <Todo
        completed={false}
        text={'something i have to do and ill probably never do'}
        created={1}
    ></Todo>
  ))
  .add('completed', () => (
    <Todo
        completed={true}
        text={"something I've done because it was easy"}
        created={10000000}
    ></Todo>  ));
