# coding: utf-8

"""
    SQE API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from qumranica_api_connector.configuration import Configuration


class BatchEditRoiResponseDTO(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'create_rois': 'list[InterpretationRoiDTO]',
        'update_rois': 'list[UpdatedInterpretationRoiDTO]',
        'delete_rois': 'list[int]'
    }

    attribute_map = {
        'create_rois': 'createRois',
        'update_rois': 'updateRois',
        'delete_rois': 'deleteRois'
    }

    def __init__(self, create_rois=None, update_rois=None, delete_rois=None, local_vars_configuration=None):  # noqa: E501
        """BatchEditRoiResponseDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._create_rois = None
        self._update_rois = None
        self._delete_rois = None
        self.discriminator = None

        self.create_rois = create_rois
        self.update_rois = update_rois
        self.delete_rois = delete_rois

    @property
    def create_rois(self):
        """Gets the create_rois of this BatchEditRoiResponseDTO.  # noqa: E501


        :return: The create_rois of this BatchEditRoiResponseDTO.  # noqa: E501
        :rtype: list[InterpretationRoiDTO]
        """
        return self._create_rois

    @create_rois.setter
    def create_rois(self, create_rois):
        """Sets the create_rois of this BatchEditRoiResponseDTO.


        :param create_rois: The create_rois of this BatchEditRoiResponseDTO.  # noqa: E501
        :type create_rois: list[InterpretationRoiDTO]
        """
        if self.local_vars_configuration.client_side_validation and create_rois is None:  # noqa: E501
            raise ValueError("Invalid value for `create_rois`, must not be `None`")  # noqa: E501

        self._create_rois = create_rois

    @property
    def update_rois(self):
        """Gets the update_rois of this BatchEditRoiResponseDTO.  # noqa: E501


        :return: The update_rois of this BatchEditRoiResponseDTO.  # noqa: E501
        :rtype: list[UpdatedInterpretationRoiDTO]
        """
        return self._update_rois

    @update_rois.setter
    def update_rois(self, update_rois):
        """Sets the update_rois of this BatchEditRoiResponseDTO.


        :param update_rois: The update_rois of this BatchEditRoiResponseDTO.  # noqa: E501
        :type update_rois: list[UpdatedInterpretationRoiDTO]
        """
        if self.local_vars_configuration.client_side_validation and update_rois is None:  # noqa: E501
            raise ValueError("Invalid value for `update_rois`, must not be `None`")  # noqa: E501

        self._update_rois = update_rois

    @property
    def delete_rois(self):
        """Gets the delete_rois of this BatchEditRoiResponseDTO.  # noqa: E501


        :return: The delete_rois of this BatchEditRoiResponseDTO.  # noqa: E501
        :rtype: list[int]
        """
        return self._delete_rois

    @delete_rois.setter
    def delete_rois(self, delete_rois):
        """Sets the delete_rois of this BatchEditRoiResponseDTO.


        :param delete_rois: The delete_rois of this BatchEditRoiResponseDTO.  # noqa: E501
        :type delete_rois: list[int]
        """
        if self.local_vars_configuration.client_side_validation and delete_rois is None:  # noqa: E501
            raise ValueError("Invalid value for `delete_rois`, must not be `None`")  # noqa: E501

        self._delete_rois = delete_rois

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, BatchEditRoiResponseDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BatchEditRoiResponseDTO):
            return True

        return self.to_dict() != other.to_dict()