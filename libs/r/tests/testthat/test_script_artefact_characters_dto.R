# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate

context("Test ScriptArtefactCharactersDTO")

model.instance <- ScriptArtefactCharactersDTO$new()

test_that("artefactName", {
  # tests for the property `artefactName` (character)

  # uncomment below to test the property 
  #expect_equal(model.instance$`artefactName`, "EXPECTED_RESULT")
})

test_that("artefactId", {
  # tests for the property `artefactId` (integer)

  # uncomment below to test the property 
  #expect_equal(model.instance$`artefactId`, "EXPECTED_RESULT")
})

test_that("placement", {
  # tests for the property `placement` (PlacementDTO)

  # uncomment below to test the property 
  #expect_equal(model.instance$`placement`, "EXPECTED_RESULT")
})

test_that("characters", {
  # tests for the property `characters` (array[SignInterpretationDTO])

  # uncomment below to test the property 
  #expect_equal(model.instance$`characters`, "EXPECTED_RESULT")
})

