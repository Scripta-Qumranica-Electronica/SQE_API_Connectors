# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate

context("Test ImagedObjectDTO")

model.instance <- ImagedObjectDTO$new()

test_that("id", {
  # tests for the property `id` (character)

  # uncomment below to test the property 
  #expect_equal(model.instance$`id`, "EXPECTED_RESULT")
})

test_that("recto", {
  # tests for the property `recto` (ImageStackDTO)

  # uncomment below to test the property 
  #expect_equal(model.instance$`recto`, "EXPECTED_RESULT")
})

test_that("verso", {
  # tests for the property `verso` (ImageStackDTO)

  # uncomment below to test the property 
  #expect_equal(model.instance$`verso`, "EXPECTED_RESULT")
})

test_that("artefacts", {
  # tests for the property `artefacts` (array[ArtefactDTO])

  # uncomment below to test the property 
  #expect_equal(model.instance$`artefacts`, "EXPECTED_RESULT")
})

