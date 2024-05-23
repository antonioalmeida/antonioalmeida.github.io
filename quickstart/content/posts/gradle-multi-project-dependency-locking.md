---
author: "António Almeida"
date: 2024-05-23
linktitle: "gradle-multi-project-dependency-locking"
menu:
  main:
    parent: tutorials
title: Dependency Locking in Gradle Multi-Project setup
weight: 10

---

It's good practice to lock dependency versions when building software. 

In Gradle projects locking is achieved by generating and maintaining a `gradle.lockfile` as dependencies are updated. It's relatively easy to configure it for a single build project, i.e., single `build.gradle` file.

When using Gradle Multi-Project, it's more complicated. From Gradle's [dependency locking documentation](https://docs.gradle.org/8.4/userguide/dependency_locking.html#lock_all_configurations_in_one_build_execution):

> "Note that in a multi project setup, `dependencies` only is executed on one project, the root one in this case."

I can't find any official dependency locking solution for Multi-Project setups, so created a script to address it.

## Usage

1. On your root `build.gradle`, enable dependency locking on all `subprojects`: 

```groovy
// (...) 

subprojects { subproject ->
    // (...)

    dependencyLocking {
        lockAllConfigurations()
    }
    
    // (...)
}
```

2. Create an initial lock state (source for script [below](#appendix)):

```shell
$ sh dependencies-write-locks.sh
```

This will run `./gradlew dependencies --write-locks` per project, therefore creating a `gradle.lockfile` per Gradle project.

Now, whenever you update or add a dependency, `dependencies-write-locks.sh` must be run to update the lockfiles. You should add them to Git. 

### Remarks

- Protip: run `./gradlew projects` to list your subprojects 
- Is there a Gradle plugin that does this? I'll maybe create one if there isn't
- Thanks to [Kyle Kelly](https://www.cramhacks.com/p/gradle-multi-project-lockfiles) for inspiration

### Appendix

Source for `dependencies-write-locks.sh`

```shell
#!/bin/bash

# Capture the gradle projects as a variable
project_names=$(./gradlew projects | grep 'Project' | awk -F"'" '{print $2}')

for project in $project_names; {
  ./gradlew $project:dependencies --write-locks
}

echo "Updated gradle.lockfiles for $(echo $project_names | wc -w) projects"
```