<script lang="ts">
	import Matter from 'matter-js';

	// Create engine and renderer
	const engine = Matter.Engine.create();
	const render = Matter.Render.create({ element: document.body, engine: engine });

	// Create two boxes and a ground
	const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
	const boxB = Matter.Bodies.rectangle(450, 50, 80, 80);
	const ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

	// Add all bodies to the world
	Matter.Composite.add(engine.world, [boxA, boxB, ground]);

	// Run the renderer
	Matter.Render.run(render);

	// Create runner
	const runner = Matter.Runner.create();

	// Run the engine
	Matter.Runner.run(runner, engine);
</script>