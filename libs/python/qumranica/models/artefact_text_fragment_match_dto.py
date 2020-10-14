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

from qumranica.configuration import Configuration


class ArtefactTextFragmentMatchDTO(object):
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
        'suggested': 'bool',
        'id': 'int',
        'name': 'str',
        'editor_id': 'int'
    }

    attribute_map = {
        'suggested': 'suggested',
        'id': 'id',
        'name': 'name',
        'editor_id': 'editorId'
    }

    def __init__(self, suggested=None, id=None, name=None, editor_id=None, local_vars_configuration=None):  # noqa: E501
        """ArtefactTextFragmentMatchDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._suggested = None
        self._id = None
        self._name = None
        self._editor_id = None
        self.discriminator = None

        self.suggested = suggested
        self.id = id
        self.name = name
        self.editor_id = editor_id

    @property
    def suggested(self):
        """Gets the suggested of this ArtefactTextFragmentMatchDTO.  # noqa: E501


        :return: The suggested of this ArtefactTextFragmentMatchDTO.  # noqa: E501
        :rtype: bool
        """
        return self._suggested

    @suggested.setter
    def suggested(self, suggested):
        """Sets the suggested of this ArtefactTextFragmentMatchDTO.


        :param suggested: The suggested of this ArtefactTextFragmentMatchDTO.  # noqa: E501
        :type: bool
        """
        if self.local_vars_configuration.client_side_validation and suggested is None:  # noqa: E501
            raise ValueError("Invalid value for `suggested`, must not be `None`")  # noqa: E501

        self._suggested = suggested

    @property
    def id(self):
        """Gets the id of this ArtefactTextFragmentMatchDTO.  # noqa: E501


        :return: The id of this ArtefactTextFragmentMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ArtefactTextFragmentMatchDTO.


        :param id: The id of this ArtefactTextFragmentMatchDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and id is None:  # noqa: E501
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def name(self):
        """Gets the name of this ArtefactTextFragmentMatchDTO.  # noqa: E501


        :return: The name of this ArtefactTextFragmentMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this ArtefactTextFragmentMatchDTO.


        :param name: The name of this ArtefactTextFragmentMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and name is None:  # noqa: E501
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def editor_id(self):
        """Gets the editor_id of this ArtefactTextFragmentMatchDTO.  # noqa: E501


        :return: The editor_id of this ArtefactTextFragmentMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._editor_id

    @editor_id.setter
    def editor_id(self, editor_id):
        """Sets the editor_id of this ArtefactTextFragmentMatchDTO.


        :param editor_id: The editor_id of this ArtefactTextFragmentMatchDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and editor_id is None:  # noqa: E501
            raise ValueError("Invalid value for `editor_id`, must not be `None`")  # noqa: E501

        self._editor_id = editor_id

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
        if not isinstance(other, ArtefactTextFragmentMatchDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ArtefactTextFragmentMatchDTO):
            return True

        return self.to_dict() != other.to_dict()