---
posttype: "module" 
title: ModuleTestingEnvironment
description: "A test helper to instantiate a full headless TerasologyEngine instance."
cover: "./cover.png"
tags: ["Library"]
---
# ModuleTestingEnvironment

A test helper to instantiate a full headless TerasologyEngine instance in JUnit tests.

## ⚠️ Issues

On using MTE tests, you might face the following error:
```
java.lang.IllegalStateException: Modules only available if resolution was successful
```
In the logs, you should see something along the following lines:
```
08:11:52.856 [Test worker] ERROR org.terasology.moduletestingenvironment.TestingStateHeadlessSetup - Unable to resolve modules: [engine, DynamicCities, ModuleTestingEnvironment]
```

We do not know, yet, why this happens, but hope that with the migration to gestalt v7, the situation will improve or at least clarify a bit.
Until the migration is complete, we suggest disabling the test using the `@Disable` annotation.

## Usage

For complete JavaDoc please see the [documentation on Github Pages](https://terasology.github.io/ModuleTestingEnvironment/).

For more examples see
[the test suite](https://github.com/terasology/ModuleTestingEnvironment/tree/master/src/test/java/org/terasology/moduletestingenvironment).

Here's an example taken from the test suite:

```java
@ExtendWith(MTEExtension.class)
@Dependencies({"engine", "MyModule"})
@UseWorldGenerator("CoreWorlds:flat")
public class ExampleTest {

    @In
    private WorldProvider worldProvider;
    @In
    private BlockManager blockManager;
    @In
    private EntityManager entityManager;
    @In
    private ModuleTestingHelper helper;

    @Test
    public void testExample() {
        // create some clients (the library connects them automatically)
        Context clientContext1 = helper.createClient();
        Context clientContext2 = helper.createClient();

        // wait for both clients to be known to the server
        helper.runUntil(()-> Lists.newArrayList(entityManager.getEntitiesWith(ClientComponent.class)).size() == 2);
        Assertions.assertEquals(2, Lists.newArrayList(entityManager.getEntitiesWith(ClientComponent.class)).size());

        // run while a condition is true or until a timeout passes
        boolean timedOut = helper.runWhile(1000, ()-> true);
        Assertions.assertTrue(timedOut);

        // send an event to a client's local player just for fun
        clientContext1.get(LocalPlayer.class).getClientEntity().send(new ResetCameraEvent());

        // wait for a chunk to be generated
        helper.forceAndWaitForGeneration(Vector3i.zero());

        // set a block's type and immediately read it back
        worldProvider.setBlock(Vector3i.zero(), blockManager.getBlock("engine:air"));
        Assertions.assertEquals("engine:air", worldProvider.getBlock(Vector3f.zero()).getURI().toString());
    }
}
```

## Receiving events

You can use a `TestEventReceiver` to inspect events fired against the engine context.

```java
TestEventReceiver receiver = new TestEventReceiver<>(context, DropItemEvent.class, (event, entity) -> {
  // do something with the event or entity
});
```

## Delay code

Conventionally, we use `while (condition)` to wait for delaying action. This can be done in MTE test by using
`runWhile()` method. This runs the test engine while the condition is true.

```java
runWhile(() -> true);
```

Conversely, for running the enging _until_ some condition is true, use `runUntil()`

```java
runUntil(() -> false);
```

Check the JavaDoc and test suite for more usage examples.

## Isolating test cases

By default `MTEExtension` will reuse the same engine instance for all test cases. If you want to create a new engine
instance for every test (and wait **much** longer) try `IsolatedMTEExtension`.
