import { SkillDataType } from "@@types/Skill";
import MarkerListItem from "@components/atoms/common/MarkerListItem";
import TechTagItem from "@components/atoms/common/TechTagItem";
import styled from "styled-components";

interface SkillListItemProps {
  data: SkillDataType;
}

const SkillListItem = ({ data }: SkillListItemProps) => {
  const { title, skills, description } = data ?? {};

  return (
    <Wrap>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
      <TagBox>
        {skills?.map((item, index) => (
          <TechTagItem key={index} text={item} />
        ))}
      </TagBox>
      <DescriptionListBox>
        {description?.map((item, index) => (
          <MarkerListItemBox key={index}>
            <MarkerListItem text={item} />
          </MarkerListItemBox>
        ))}
      </DescriptionListBox>
    </Wrap>
  );
};

export default SkillListItem;

const Wrap = styled.div`
  :not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const TitleBox = styled.div`
  margin-bottom: 0.3rem;
`;

const Title = styled.span`
  white-space: pre-wrap;
  word-break: keep-all;
  font-weight: bold;
  color: inherit;
  font-size: 1.25rem;
  line-height: 1.5;
`;

const TagBox = styled.div`
  margin-bottom: 1rem;
`;

const MarkerListItemBox = styled.ul`
  margin-top: 1rem;
  list-style: disc;
  padding-left: 1.5rem;
`;

const DescriptionListBox = styled.div``;
