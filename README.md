# Notes/Takeaways

<ul>
	<li><strong>Naming conventions:</strong> filename is the name of the module (lower-case-dashed), and the module type is denoted in a postfix, e.g.
	    <ul>
	        <li>
	            Class component postfixed with <code>.component</code>, 
                e.g. <code>app.component</code> (.ts) should export <code>AppComponent</code>.
            </li>
	        <li>
	            Services postfixed with <code>.service</code>
	            e.g. <code>hero.service</code> (.ts) should export <code>HeroService</code>.     
            </li>
	    </ul>
    </li>
	<li><code>@Component</code> used to define metadata for an Angular component</li>
	<li>CLASSES when we need logic and behavior</li>
	<li>INTERFACES when we just want type checking (also lighter weight, as nothing needs to be transpiled for interface)</li>
	<li>Can use backticks <code>`</code> for multi-line template strings</li>
	<li>Component styles scoped to that specific component only (+1 for modularity)</li>
	<li><code>@Injectable()</code> decorator used to enable DI for a service etc., best practice to add it from the start (consistency, future-proofing)</li>
	<li>To get an injectable service, we must add it to <code>providers</code> array in <code>@Component</code> metadata.<br/>
	<strong>Note:</strong> components inherit the services of the other component above them in the component tree, so you need to think about where
	 in the tree you define a service <code>provider</code> (only one per instance of app).
	</li>
	<li>
		Injectable go into <code>constructor</code>
	</li>
	<li>Private vars (e.g. an injected service) should be prefixed with <code>_</code> underscore to warn that it's not part of components public API</li>
	<li>To avoid heavy lifting in constructor (web service/config loading), we have Angular's <code>ngOnInit</code> Lifecycle Hook</li>
</ul>	

