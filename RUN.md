# OwnerSetup

### Setup

```
yarn install
```

### Run

```
yarn start
```

Go to http://localhost:4200

### Folder Structure

- apps
  - home-page
  - nested-routes
  - orchestration-layer
  - todos

### Application Structure

- apps
  - orchestration-layer
    - home-page ( -> / )
    - todos ( -> /todos )
      - Todo ( -> /todos/:todoId )
    - nested-routes ( -> /nested )
      - Nested Default ( -> /nested)
      - Nested Home ( -> /nested/nested-home )
      - Nested Todo ( -> /nested/nested-todos )
        - Todo ( -> /nested/nested-todos/:todoId)

