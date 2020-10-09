# coding: utf-8

# flake8: noqa

"""
    SQE API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

__version__ = "1.0.0"

# import apis into sdk package
from openapi_client.api.artefact_api import ArtefactApi
from openapi_client.api.catalogue_api import CatalogueApi
from openapi_client.api.edition_api import EditionApi
from openapi_client.api.imaged_object_api import ImagedObjectApi
from openapi_client.api.roi_api import RoiApi
from openapi_client.api.sign_interpretation_api import SignInterpretationApi
from openapi_client.api.text_api import TextApi
from openapi_client.api.user_api import UserApi
from openapi_client.api.util_api import UtilApi

# import ApiClient
from openapi_client.api_client import ApiClient
from openapi_client.configuration import Configuration
from openapi_client.exceptions import OpenApiException
from openapi_client.exceptions import ApiTypeError
from openapi_client.exceptions import ApiValueError
from openapi_client.exceptions import ApiKeyError
from openapi_client.exceptions import ApiAttributeError
from openapi_client.exceptions import ApiException
# import models into sdk package
from openapi_client.models.account_activation_request_dto import AccountActivationRequestDTO
from openapi_client.models.admin_editor_request_dto import AdminEditorRequestDTO
from openapi_client.models.admin_editor_request_list_dto import AdminEditorRequestListDTO
from openapi_client.models.artefact_dto import ArtefactDTO
from openapi_client.models.artefact_data_dto import ArtefactDataDTO
from openapi_client.models.artefact_data_list_dto import ArtefactDataListDTO
from openapi_client.models.artefact_group_dto import ArtefactGroupDTO
from openapi_client.models.artefact_group_list_dto import ArtefactGroupListDTO
from openapi_client.models.artefact_list_dto import ArtefactListDTO
from openapi_client.models.artefact_text_fragment_match_dto import ArtefactTextFragmentMatchDTO
from openapi_client.models.artefact_text_fragment_match_list_dto import ArtefactTextFragmentMatchListDTO
from openapi_client.models.attribute_dto import AttributeDTO
from openapi_client.models.attribute_list_dto import AttributeListDTO
from openapi_client.models.attribute_value_dto import AttributeValueDTO
from openapi_client.models.batch_edit_roi_dto import BatchEditRoiDTO
from openapi_client.models.batch_edit_roi_response_dto import BatchEditRoiResponseDTO
from openapi_client.models.batch_update_artefact_placement_dto import BatchUpdateArtefactPlacementDTO
from openapi_client.models.batch_updated_artefact_transform_dto import BatchUpdatedArtefactTransformDTO
from openapi_client.models.catalogue_match_dto import CatalogueMatchDTO
from openapi_client.models.catalogue_match_input_dto import CatalogueMatchInputDTO
from openapi_client.models.catalogue_match_list_dto import CatalogueMatchListDTO
from openapi_client.models.character_shape_dto import CharacterShapeDTO
from openapi_client.models.commentary_create_dto import CommentaryCreateDTO
from openapi_client.models.commentary_dto import CommentaryDTO
from openapi_client.models.create_artefact_dto import CreateArtefactDTO
from openapi_client.models.create_artefact_group_dto import CreateArtefactGroupDTO
from openapi_client.models.create_attribute_dto import CreateAttributeDTO
from openapi_client.models.create_attribute_value_dto import CreateAttributeValueDTO
from openapi_client.models.create_text_fragment_dto import CreateTextFragmentDTO
from openapi_client.models.delete_dto import DeleteDTO
from openapi_client.models.delete_token_dto import DeleteTokenDTO
from openapi_client.models.detailed_editor_rights_dto import DetailedEditorRightsDTO
from openapi_client.models.detailed_user_dto import DetailedUserDTO
from openapi_client.models.detailed_user_token_dto import DetailedUserTokenDTO
from openapi_client.models.direction import Direction
from openapi_client.models.edition_copy_dto import EditionCopyDTO
from openapi_client.models.edition_dto import EditionDTO
from openapi_client.models.edition_entities import EditionEntities
from openapi_client.models.edition_group_dto import EditionGroupDTO
from openapi_client.models.edition_list_dto import EditionListDTO
from openapi_client.models.edition_manuscript_metrics_dto import EditionManuscriptMetricsDTO
from openapi_client.models.edition_script_collection_dto import EditionScriptCollectionDTO
from openapi_client.models.edition_script_lines_dto import EditionScriptLinesDTO
from openapi_client.models.edition_update_request_dto import EditionUpdateRequestDTO
from openapi_client.models.editor_dto import EditorDTO
from openapi_client.models.editor_invitation_dto import EditorInvitationDTO
from openapi_client.models.editor_invitation_list_dto import EditorInvitationListDTO
from openapi_client.models.image_dto import ImageDTO
from openapi_client.models.image_institution_dto import ImageInstitutionDTO
from openapi_client.models.image_institution_list_dto import ImageInstitutionListDTO
from openapi_client.models.image_stack_dto import ImageStackDTO
from openapi_client.models.imaged_object_dto import ImagedObjectDTO
from openapi_client.models.imaged_object_list_dto import ImagedObjectListDTO
from openapi_client.models.imaged_object_text_fragment_match_dto import ImagedObjectTextFragmentMatchDTO
from openapi_client.models.imaged_object_text_fragment_match_list_dto import ImagedObjectTextFragmentMatchListDTO
from openapi_client.models.institutional_image_dto import InstitutionalImageDTO
from openapi_client.models.institutional_image_list_dto import InstitutionalImageListDTO
from openapi_client.models.interpretation_attribute_create_dto import InterpretationAttributeCreateDTO
from openapi_client.models.interpretation_attribute_dto import InterpretationAttributeDTO
from openapi_client.models.interpretation_roi_dto import InterpretationRoiDTO
from openapi_client.models.interpretation_roi_dto_list import InterpretationRoiDTOList
from openapi_client.models.invite_editor_dto import InviteEditorDTO
from openapi_client.models.lighting import Lighting
from openapi_client.models.line_dto import LineDTO
from openapi_client.models.line_data_dto import LineDataDTO
from openapi_client.models.line_data_list_dto import LineDataListDTO
from openapi_client.models.line_text_dto import LineTextDTO
from openapi_client.models.login_request_dto import LoginRequestDTO
from openapi_client.models.new_user_request_dto import NewUserRequestDTO
from openapi_client.models.next_sign_interpretation_dto import NextSignInterpretationDTO
from openapi_client.models.permission_dto import PermissionDTO
from openapi_client.models.placement_dto import PlacementDTO
from openapi_client.models.resend_user_account_activation_request_dto import ResendUserAccountActivationRequestDTO
from openapi_client.models.reset_forgotten_user_password_request_dto import ResetForgottenUserPasswordRequestDTO
from openapi_client.models.reset_logged_in_user_password_request_dto import ResetLoggedInUserPasswordRequestDTO
from openapi_client.models.reset_user_password_request_dto import ResetUserPasswordRequestDTO
from openapi_client.models.script_artefact_characters_dto import ScriptArtefactCharactersDTO
from openapi_client.models.script_line_dto import ScriptLineDTO
from openapi_client.models.script_text_fragment_dto import ScriptTextFragmentDTO
from openapi_client.models.set_interpretation_roi_dto import SetInterpretationRoiDTO
from openapi_client.models.set_interpretation_roi_dto_list import SetInterpretationRoiDTOList
from openapi_client.models.side_designation import SideDesignation
from openapi_client.models.sign_dto import SignDTO
from openapi_client.models.sign_interpretation_create_dto import SignInterpretationCreateDTO
from openapi_client.models.sign_interpretation_dto import SignInterpretationDTO
from openapi_client.models.sign_interpretation_list_dto import SignInterpretationListDTO
from openapi_client.models.simple_image_dto import SimpleImageDTO
from openapi_client.models.simple_image_list_dto import SimpleImageListDTO
from openapi_client.models.text_edition_dto import TextEditionDTO
from openapi_client.models.text_fragment_dto import TextFragmentDTO
from openapi_client.models.text_fragment_data_dto import TextFragmentDataDTO
from openapi_client.models.text_fragment_data_list_dto import TextFragmentDataListDTO
from openapi_client.models.translate_dto import TranslateDTO
from openapi_client.models.unactivated_email_update_request_dto import UnactivatedEmailUpdateRequestDTO
from openapi_client.models.update_artefact_dto import UpdateArtefactDTO
from openapi_client.models.update_artefact_group_dto import UpdateArtefactGroupDTO
from openapi_client.models.update_artefact_placement_dto import UpdateArtefactPlacementDTO
from openapi_client.models.update_attribute_dto import UpdateAttributeDTO
from openapi_client.models.update_attribute_value_dto import UpdateAttributeValueDTO
from openapi_client.models.update_edition_manuscript_metrics_dto import UpdateEditionManuscriptMetricsDTO
from openapi_client.models.update_editor_rights_dto import UpdateEditorRightsDTO
from openapi_client.models.update_interpretation_roi_dto import UpdateInterpretationRoiDTO
from openapi_client.models.update_interpretation_roi_dto_list import UpdateInterpretationRoiDTOList
from openapi_client.models.update_text_fragment_dto import UpdateTextFragmentDTO
from openapi_client.models.updated_artefact_placement_dto import UpdatedArtefactPlacementDTO
from openapi_client.models.updated_interpretation_roi_dto import UpdatedInterpretationRoiDTO
from openapi_client.models.updated_interpretation_roi_dto_list import UpdatedInterpretationRoiDTOList
from openapi_client.models.user_dto import UserDTO
from openapi_client.models.user_update_request_dto import UserUpdateRequestDTO
from openapi_client.models.wkt_polygon_dto import WktPolygonDTO
