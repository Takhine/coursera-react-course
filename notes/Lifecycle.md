<h1>Lifecycle methods</h1>

<h2>Mounting Lifecycle Methods</h2>

<ul>
<li>constructor()</li>
<li>getDerivedStateFromProps()</li>
<li>render()</li>
<li>componentDidMount()</li>
</ul>

componentDidMount()
used when you need to execute someting after the component gets added to the DOM


<h2>Updating Lifecycle Methods</h2>

<ul>
<li>Can be caused by changes to props or states</li>
<li>getDerivedStateFromProps()</li>
<li>shouldComponentUpdate()</li>
<li>render()</li>
<li>getSnapshotBeforeUpdate()</li>
<li>componentDidUpdate()</li>
</ul>

getDerivedStateFromProps()
Also Available during mounting

shouldComponentUpdate()
returns a boolean, if set to false the component will never update while re-rendering.

render()
Called everytime the props or states are re-rendered 

componentDidUpdate()
Invoked when the component is updated