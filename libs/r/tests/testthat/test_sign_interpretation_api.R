# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate

context("Test SignInterpretationApi")

api.instance <- SignInterpretationApi$new()

test_that("V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete", {
  # tests for V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete
  # base path: http://localhost
  # Delete an attribute from an edition
  # @param integer  edition.id  The ID of the edition being edited 
  # @param integer  attribute.id  The ID of the attribute to delete 
  # @return [Void]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut", {
  # tests for V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut
  # base path: http://localhost
  # Change the details of an attribute in an edition
  # @param integer  edition.id  The ID of the edition being edited 
  # @param integer  attribute.id  The ID of the attribute to update 
  # @param UpdateAttributeDTO  update.attribute.dto  The details of the updated attribute  (optional)
  # @return [AttributeDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsAttributesGet", {
  # tests for V1EditionsEditionIdSignInterpretationsAttributesGet
  # base path: http://localhost
  # Retrieve a list of all possible attributes for an edition
  # @param integer  edition.id  The ID of the edition being searched 
  # @return [AttributeListDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsAttributesPost", {
  # tests for V1EditionsEditionIdSignInterpretationsAttributesPost
  # base path: http://localhost
  # Create a new attribute for an edition
  # @param integer  edition.id  The ID of the edition being edited 
  # @param CreateAttributeDTO  create.attribute.dto  The details of the new attribute  (optional)
  # @return [AttributeDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsPost", {
  # tests for V1EditionsEditionIdSignInterpretationsPost
  # base path: http://localhost
  # Creates a new sign interpretation
  # @param integer  edition.id  ID of the edition being changed 
  # @param SignInterpretationCreateDTO  sign.interpretation.create.dto  New sign interpretation data to be added  (optional)
  # @return [SignInterpretationListDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete", {
  # tests for V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete
  # base path: http://localhost
  # This deletes the specified attribute value from the specified sign interpretation.
  # @param integer  edition.id  ID of the edition being changed 
  # @param integer  sign.interpretation.id  ID of the sign interpretation being altered 
  # @param integer  attribute.value.id  Id of the attribute being removed 
  # @return [Void]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut", {
  # tests for V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut
  # base path: http://localhost
  # This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.
  # @param integer  edition.id  ID of the edition being changed 
  # @param integer  sign.interpretation.id  ID of the sign interpretation being altered 
  # @param integer  attribute.value.id  Id of the attribute value to be altered 
  # @param InterpretationAttributeCreateDTO  interpretation.attribute.create.dto  New details of the attribute  (optional)
  # @return [SignInterpretationDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost", {
  # tests for V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost
  # base path: http://localhost
  # This adds a new attribute to the specified sign interpretation.
  # @param integer  edition.id  ID of the edition being changed 
  # @param integer  sign.interpretation.id  ID of the sign interpretation for adding a new attribute 
  # @param InterpretationAttributeCreateDTO  interpretation.attribute.create.dto  Details of the attribute to be added  (optional)
  # @return [SignInterpretationDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut", {
  # tests for V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut
  # base path: http://localhost
  # Updates the commentary of a sign interpretation
  # @param integer  edition.id  ID of the edition being changed 
  # @param integer  sign.interpretation.id  ID of the sign interpretation whose commentary is being changed 
  # @param CommentaryCreateDTO  commentary.create.dto  The new commentary for the sign interpretation  (optional)
  # @return [SignInterpretationDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete", {
  # tests for V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete
  # base path: http://localhost
  # Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign&#39;s next and previous nodes.
  # @param integer  edition.id  ID of the edition being changed 
  # @param integer  sign.interpretation.id  ID of the sign interpretation being deleted 
  # @return [Void]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet", {
  # tests for V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet
  # base path: http://localhost
  # Retrieve the details of a sign interpretation in an edition
  # @param integer  edition.id  The ID of the edition being searched 
  # @param integer  sign.interpretation.id  The desired sign interpretation id 
  # @return [SignInterpretationDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost", {
  # tests for V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost
  # base path: http://localhost
  # Links two sign interpretations in the edition&#39;s sign stream
  # @param integer  edition.id  ID of the edition being changed 
  # @param integer  sign.interpretation.id  The sign interpretation to be linked to the nextSignInterpretationId 
  # @param integer  next.sign.interpretation.id  The sign interpretation to become the new next sign interpretation 
  # @return [SignInterpretationDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

test_that("V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost", {
  # tests for V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost
  # base path: http://localhost
  # Links two sign interpretations in the edition&#39;s sign stream
  # @param integer  edition.id  ID of the edition being changed 
  # @param integer  sign.interpretation.id  The sign interpretation to be unlinked from the nextSignInterpretationId 
  # @param integer  next.sign.interpretation.id  The sign interpretation to removed as next sign interpretation 
  # @return [SignInterpretationDTO]

  # uncomment below to test the operation
  #expect_equal(result, "EXPECTED_RESULT")
})

