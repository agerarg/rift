<template>
    	<nav id="menu">
									<ul>
										<router-link :to="{name: 'Default'}" tag="li"><a>Homepage</a></router-link>
										<router-link :to="{name: 'Generic'}" tag="li"><a >Generic</a></router-link>
									<router-link :to="{name: 'Elements'}" tag="li"><a >Elements</a></router-link>
										<li>
											<span class="opener">Submenu</span>
											<ul>
												<li><a href="#">Lorem Dolor</a></li>
												<li><a href="#">Ipsum Adipiscing</a></li>
												<li><a href="#">Tempus Magna</a></li>
												<li><a href="#">Feugiat Veroeros</a></li>
											</ul>
										</li>
										<li><a href="#">Etiam Dolore</a></li>
										<li><a href="#">Adipiscing</a></li>
										<li>
											<span class="opener">Another Submenu</span>
											<ul>
												<li><a href="#">Lorem Dolor</a></li>
												<li><a href="#">Ipsum Adipiscing</a></li>
												<li><a href="#">Tempus Magna</a></li>
												<li><a href="#">Feugiat Veroeros</a></li>
											</ul>
										</li>
										<li><a href="#">Maximus Erat</a></li>
										<li><a href="#">Sapien Mauris</a></li>
										<li><a href="#">Amet Lacinia</a></li>
									</ul>
								</nav>
</template>
<style lang="scss" scoped>
#menu{ 
	position: fixed; 
	width:  _size(sidebar-width);
	background-color: green;
}
</style>

